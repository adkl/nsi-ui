import { TemplatePlaceholderImpl } from './TemplatePlaceholderImpl';
import { TemplatePayload } from './interfaces/TemplatePayload';

export class TemplatePayloadImpl implements TemplatePayload {

  text: string;
  placeholders: Array<TemplatePlaceholderImpl>;

  constructor() {
    this.text = null;
    this.text = '';
    this.placeholders = new Array<TemplatePlaceholderImpl>();
  }

}
