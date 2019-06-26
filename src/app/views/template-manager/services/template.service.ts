import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Template } from '../models/interfaces/Template';
import { HttpClient } from '@angular/common/http';
import { ArrayResponse, ObjectResponse } from '../models/dto/Response';
import { BaseService } from './base.service';
import { FolderService } from './folder.service';
import { TemplateVersion } from '../models/interfaces/TemplateVersion';
import { CreateTemplateRequest } from '../models/dto/CreateTemplateRequest';
import { Paging } from '../../../shared/models/paging';
import { FilterCriteria } from '../../../shared/models/filter-criteria';
import { SortCriteria } from '../../../shared/models/sort-criteria';
import { QueryBuilder } from '../utils/QueryBuilder';
import { UpdateTemplateRequest } from '../models/dto/UpdateTemplateRequest';
import { TemplateVersionNative } from '../models/dto/TemplateVersionNative';
import { TemplateVersionImpl } from '../models/TemplateVersionImpl';
import * as fileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})

export class TemplateService extends BaseService<any> {
  private readonly templateSubpath = 'TemplateManagement/';

  constructor(http: HttpClient) {
    super(http);
  }

  getById(id: number): Observable<ObjectResponse<Template>> {
    return super.get(this.templateSubpath + 'Get/' + id);
  }

  getAllByPage(paging?: Paging, filterCriteria?: FilterCriteria[],
    sortCriteria?: SortCriteria[]): Observable<ArrayResponse<Template>> {
    const subpath: string = this.templateSubpath + 'GetAll';
    const requestUri: string = QueryBuilder.appendPagingSortingFilteringCriteria(subpath,
      paging, filterCriteria, sortCriteria);
    return super.getAll(requestUri);
  }

  create(newTemplate: CreateTemplateRequest) {
    return super.post(this.baseUrl + this.templateSubpath + 'CreateTemplate', newTemplate);
  }

  update(updateTemplateRequest: UpdateTemplateRequest) {
    return super.post(this.baseUrl + this.templateSubpath + 'CreateTemplateVersion', updateTemplateRequest);
  }

  createTemplateObject() {
    return {
      id: null,
      name: '',
      dateCreated: null,
      folder: null,
      folderId: null,
      versions: []
    };
  }

  getTemplateVersionById(id: number): Observable<ObjectResponse<TemplateVersionNative>> {
    return super.get(this.templateSubpath + 'GetTemplateVersion?templateVersionId=' + id);
  }

  deleteTemplateVersionById(id: number) {
    return super.delete(this.baseUrl + this.templateSubpath + 'DeleteTemplateVersion?templateVersionId=' + id);
  }


  exportTemplateVersionById(id: number, filename: string, exportMethod: string) {
    if (exportMethod == 'PDF')
      return super.download(this.templateSubpath + 'ExportTemplateToPdf?templateVersionId=' + id)
        .subscribe(response => {
          const blob = new Blob([response], { type: 'application/pdf' });
          fileSaver.saveAs(blob, filename);
        });
    else if (exportMethod == 'HTML')
      return super.download(this.templateSubpath + 'ExportTemplateToHtml?templateVersionId=' + id)
        .subscribe(response => {
          const blob = new Blob([response], { type: 'text/html' });
          fileSaver.saveAs(blob, filename);
        });
  }
}
