import { Folder } from './Folder';
import { TemplateVersion } from './TemplateVersion';

export interface Template {
  id: number;
  name: string;
  dateCreated: string;
  folder: Folder;
  folderId: number;
  versions: Array<TemplateVersion>;
}
