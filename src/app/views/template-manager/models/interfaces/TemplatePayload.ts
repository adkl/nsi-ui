import { TemplatePlaceholder } from './TemplatePlaceholder';

export interface TemplatePayload {
  text: string;
  placeholders: TemplatePlaceholder[];
}
