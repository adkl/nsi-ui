import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArrayResponse, ObjectResponse } from '../models/dto/Response';
import { BaseService } from './base.service';
import { Folder } from '../models/interfaces/Folder';

@Injectable({
  providedIn: 'root'
})

export class FolderService extends BaseService<Folder> {
  private readonly foldersSubpath = 'TemplateManagement/';
  public folders = new BehaviorSubject<Folder[]>([]);

  constructor(http: HttpClient) {
    super(http);
  }

  get() {
    // Not implemented
    return null;
  }

  getAllRootFolders() {
    super.getAll(this.foldersSubpath + 'GetAllRootFolders')
      .subscribe(response => this.folders.next(response.data));
  }

  createFolderObject(): Folder {
    return {
      id: null,
      dateCreated: null,
      name: '',
      parentFolderId: null
    };
  }
}
