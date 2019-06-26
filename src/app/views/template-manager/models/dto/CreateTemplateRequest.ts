import { TemplateContentImpl } from '../TemplateContentImpl';

export class CreateTemplateRequest {

  name: string;
  folderId: number;
  content: TemplateContentImpl;
  constructor() {
    this.name = '';
    this.folderId = -1;
    this.content = new TemplateContentImpl();
  }

}
