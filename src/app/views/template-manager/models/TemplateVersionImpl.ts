import { TemplateContentImpl } from './TemplateContentImpl';
import { TemplateVersion } from './interfaces/TemplateVersion';
import { TemplateVersionNative } from './dto/TemplateVersionNative';
import { TemplatePlaceholderImpl } from './TemplatePlaceholderImpl';

export class TemplateVersionImpl implements TemplateVersion {

  id: number;
  dateCreated: Date;
  isDefault: boolean;
  templateId: number;
  content: TemplateContentImpl;
  code: string;

  // Mapping JSON string from backend to FE object TemplateContentImpl
  constructor(nativeVersion?: TemplateVersionNative) {
    this.content = new TemplateContentImpl();
    this.code = '';

    if (nativeVersion) {
      this.id = nativeVersion.id;
      this.dateCreated = nativeVersion.dateCreated;
      this.isDefault = nativeVersion.isDefault;
      this.templateId = nativeVersion.templateId;
      this.code = nativeVersion.code;

      const contentObj: ContentObj = JSON.parse(nativeVersion.content);
      this.content.type = contentObj.Type;
      this.content.payload.text = contentObj.Payload.Text;

      contentObj.Payload.Placeholders.forEach(element => {
        const newPlaceholder = new TemplatePlaceholderImpl();
        newPlaceholder.id = element.Id;
        newPlaceholder.description = element.Description;
        newPlaceholder.type = element.Type;
        newPlaceholder.length = element.Length;
        this.content.payload.placeholders.push(newPlaceholder);
      });
    }
  }

}

// Helper classes for mapping purpose

class ContentObj {
  Type: number;
  Payload: PayloadObj;

  constructor() {
    this.Payload = new PayloadObj();
  }
}

class PayloadObj {
  Text: string;
  Placeholders: Array<PlaceholderObj>;

  constructor() {
    this.Text = '';
    this.Placeholders = new Array<PlaceholderObj>();
  }
}

class PlaceholderObj {
  Id: number;
  Description: string;
  Type: string;
  Length: number;

  constructor() {
    this.Description = '';
    this.Type = 'unknown';
  }
}
