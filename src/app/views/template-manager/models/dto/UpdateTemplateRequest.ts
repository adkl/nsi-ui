import { TemplateContentImpl } from '../TemplateContentImpl';

export class UpdateTemplateRequest {
  constructor(public templateId: number,
              public content: TemplateContentImpl) {}
}
