import { TemplateContent } from './interfaces/TemplateContent';
import { TemplatePayloadImpl } from './TemplatePayloadImpl';

export class TemplateContentImpl implements TemplateContent {

  type: number;
  payload: TemplatePayloadImpl;

  constructor() {
    this.payload = new TemplatePayloadImpl();
  }

}
