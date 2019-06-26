import { TemplateContent } from './TemplateContent';

export interface TemplateVersion {
  id: number;
  dateCreated: Date;
  isDefault: boolean;
  templateId: number;
  content: TemplateContent;
  code: string;
}


