import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteTemplateComponent } from '../delete-template/delete-template.component';
import { SearchComponent } from '../search/search.component';
import { CreateEditTemplateComponent } from '../create-edit-template/create-edit-template.component';
import { Template } from '../../models/interfaces/Template';
import { TemplateService } from '../../services/template.service';
import { TemplateImpl } from '../../models/TemplateImpl';
import { TemplateVersionImpl } from '../../models/TemplateVersionImpl';
import { Paging } from '../../../../shared/models/paging';
import { FilterCriteria } from '../../../../shared/models/filter-criteria';
import { SortCriteria } from '../../../../shared/models/sort-criteria';
import { FolderService } from '../../services/folder.service';
import { Folder } from '../../models/interfaces/Folder';
import { all } from 'q';
import { SaveTemplateComponent } from '../save-template/save-template.component';

@Component({
  selector: 'app-view-templates',
  templateUrl: './view-templates.component.html',
  styleUrls: ['./view-templates.component.scss']
})
export class ViewTemplatesComponent implements OnInit {

  @ViewChild('deleteTemplateModal') deleteTemplateComponent: DeleteTemplateComponent;
  @ViewChild('saveTemplateModal') saveTemplateComponent: SaveTemplateComponent;
  @ViewChild('searchComponent') searchComponent: SearchComponent;
  @ViewChild('createEditTemplateModal') createEditTemplateComponent: CreateEditTemplateComponent;

  templates: Array<TemplateImpl> = new Array<TemplateImpl>();
  folders: Folder[] = [];
  selectedVersions: { [id: number]: TemplateVersionImpl};
  currentPage: Paging = new Paging(1, 0, 9, 2);
  currentFilterCriteria: FilterCriteria[] = [];
  currentSortCriteria: SortCriteria[] = [];
  pages: number[] = [];
  selectedFolderId = undefined;

  constructor(
    private templateService: TemplateService,
    private folderService: FolderService
    ) { }

  ngOnInit() {
    this.getPage();
    this.folderService.getAllRootFolders();
    this.folderService.folders.subscribe(folders => this.folders = folders);
  }

  createTemplate() {
    this.createEditTemplateComponent.openModal();
  }

  editTemplate(template: TemplateImpl) {
    console.log(this.selectedVersions[template.id]);
    this.createEditTemplateComponent.openModal(template, this.selectedVersions[template.id].id);
  }

  exportTemplate(templateVersion: TemplateVersionImpl) {
    this.saveTemplateComponent.openModal(templateVersion.id, templateVersion.code);
  }

  deleteTemplate(templateVersion: TemplateVersionImpl) {
    this.deleteTemplateComponent.id = templateVersion.id;
    this.deleteTemplateComponent.openModal();
  }

  receiveFolder(folderId: number) {
    if (folderId) {
      this.selectedFolderId = folderId;
    } else {
      this.selectedFolderId = undefined;
    }
    this.applyFilter(this.selectedFolderId);
  }

  receiveTitle(templateName: string) {
    if (templateName && templateName.length === 0) {
      templateName = undefined;
    }
    this.applyFilter(this.selectedFolderId, templateName);
  }

  setPage(pageNum: number) {
    if (this.validateSetPage(pageNum)) {
      this.currentPage.page = pageNum;
      this.getPage();
    }
  }

  nextPage() {
    if (this.validateNextPage()) {
      this.currentPage.page++;
      this.getPage();
    }
  }

  previousPage() {
    if (this.validatePreviousPage()) {
      this.currentPage.page--;
      this.getPage();
    }
  }

  getPage() {
      this.templateService
        .getAllByPage(this.currentPage, this.currentFilterCriteria, this.currentSortCriteria)
        .subscribe(response => {
          this.templates = response.data;
          this.currentPage = response.paging;
          this.selectedVersions = {};
          this.templates.forEach(t => this.selectedVersions[t.id] = t.versions[t.versions.length - 1]);
          this.pages = [];
          for (let i = 1; i <= this.currentPage.pages; i++) {
            this.pages.push(i);
          }
        }
      );
  }

  validateNextPage(): boolean {
    return this.currentPage.page < this.currentPage.pages;
  }

  validatePreviousPage(): boolean {
    return this.currentPage.page > 1;
  }

  validateSetPage(pageNum): boolean {
    return pageNum >= 1 && pageNum <= this.currentPage.pages;
  }

  applyFilter(folderId?: number, templateName?: string) {
    this.applyFilterHelper('folder', folderId ? folderId.toString() : null, true);
    this.applyFilterHelper('name', templateName, false);
    this.currentPage.page = 1;
    this.getPage();
  }

  applyFilterHelper(filterColumnName: string, filterTerm: string, isExactMatch: boolean) {
    if (filterTerm) {
      const updateItem: FilterCriteria = this.currentFilterCriteria.find(criteria => criteria.columnName === filterColumnName);
      if (updateItem) {
        const itemIndex: number = this.currentFilterCriteria.indexOf(updateItem);
        this.currentFilterCriteria[itemIndex].filterTerm = filterTerm;
      } else {
        this.currentFilterCriteria.push(new FilterCriteria(filterColumnName, filterTerm, isExactMatch));
      }
    } else {
      const removeItemIndex: number = this.currentFilterCriteria.findIndex(criteria => criteria.columnName === filterColumnName);
      this.currentFilterCriteria.splice(removeItemIndex, removeItemIndex === -1 ? 0 : 1);
    }
  }

  refreshTemplates($event) {
    this.getPage();
  }

  defaultVersion(templateId: number): TemplateVersionImpl {
    const allVersions = this.templates.find(t => t.id === templateId).versions;
    return allVersions[allVersions.length - 1];
  }

  onChange(templateVersion: TemplateVersionImpl) {
    this.selectedVersions[templateVersion.templateId] = templateVersion;
  }
}
