import { Folder } from './interfaces/Folder';

export class FolderImpl implements Folder {

  id: number;
  dateCreated: Date;
  name: string;
  parentFolderId: number;

  constructor() {
    this.name = '';
  }

}
