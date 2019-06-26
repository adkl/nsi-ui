import { Template } from './interfaces/Template';
import { TemplateVersionImpl } from './TemplateVersionImpl';
import { FolderImpl } from './FolderImpl';

export class TemplateImpl implements Template {

  id: number;
  name: string;
  dateCreated: string;
  folder: FolderImpl;
  folderId: number;
  versions: Array<TemplateVersionImpl>;

  constructor() {
    this.id = null;
    this.name = '';
    this.folder = new FolderImpl();
    this.versions = new Array<TemplateVersionImpl>();
  }
}
