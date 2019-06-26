import { Component, OnInit, ViewChild, Input, Output, SimpleChanges, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TemplateService } from '../../services/template.service';
import { FolderService } from '../../services/folder.service';
import { CreateTemplateRequest } from '../../models/dto/CreateTemplateRequest';
import { FolderImpl } from '../../models/FolderImpl';
import { TableViewComponent } from './table-view/table-view.component';
import { TextViewComponent } from './text-view/text-view.component';
import { timer, Observable, Subscription } from 'rxjs';
import { UpdateTemplateRequest } from '../../models/dto/UpdateTemplateRequest';
import { TemplateVersionImpl } from '../../models/TemplateVersionImpl';
import { TemplateImpl } from '../../models/TemplateImpl';

@Component({
  selector: 'app-create-edit-template',
  templateUrl: './create-edit-template.component.html',
  styleUrls: ['./create-edit-template.component.scss']
})

export class CreateEditTemplateComponent implements OnInit, AfterViewInit, OnChanges {

  
  @ViewChild('createEditTemplateModal') modal: any;
  @ViewChild(TableViewComponent) table;
  @ViewChild(TextViewComponent) text;

  @Output() templateCreated = new EventEmitter<number>();
  @Output() templateUpdated = new EventEmitter<number>();

  sharePlaceholder: string;
  shareDeletePlaceholder: string;

  hideTextViewBoolean: boolean;
  template: CreateTemplateRequest;
  templateVersion: TemplateVersionImpl;
  folders: FolderImpl[] = [];
  folder: FolderImpl;
  shouldValidate = false;
  timer: Observable<number>;
  timerSubscription: Subscription;

  constructor(private toastr: ToastrManager,
    private templateService: TemplateService,
    private folderService: FolderService) { }

  ngOnInit() {
    this.template = new CreateTemplateRequest();
    this.folder = new FolderImpl();
    this.hideTextViewBoolean = true;
    this.sharePlaceholder = '';
    this.folderService.folders.subscribe(folders => {
      this.folders = folders;
      this.folder = this.folders[0];
    });
  }

  ngAfterViewInit() {
    this.template.content.payload.placeholders = this.table.placeholders;
  }

  ngOnChanges(changes: SimpleChanges) { }

  openModal(template?: TemplateImpl, templateVersionId?: number) {
    if (templateVersionId) {
      this.templateService.getTemplateVersionById(templateVersionId)
        .subscribe(response => {
          this.templateVersion = new TemplateVersionImpl(response.data);
          this.template.content = this.templateVersion.content;
          this.folder = template.folder;
          this.template.name = template.name;
          this.text.content = this.templateVersion.content.payload.text;
          for (let i = 0; i < this.templateVersion.content.payload.placeholders.length; i++) {
            this.templateVersion.content.payload.placeholders[i].type = this.table.types[this.templateVersion.content.payload.placeholders[i].type];
          }
          this.table.placeholders = this.templateVersion.content.payload.placeholders;
        });
    }
    this.modal.show();
  }

  hideTextView() { this.hideTextViewBoolean = !this.hideTextViewBoolean; }

  afterHidden() { this.templateVersion = null; }

  saveTemplate() {
    if (!this.validation()) {
      return;
    }
    
    if (this.templateVersion) {
      this.updateTemplate();
      return;
    }
    this.template.folderId = this.folder.id;
    this.template.content.payload.text = this.text.content;
    this.templateService.create(this.template).subscribe(response => {
      if (response.success) {
        this.toastr.successToastr('Template sucessfuly created.');
        this.templateCreated.emit(1);
        this.clearModalContent();
        this.modal.hide();
      } else {
        this.toastr.errorToastr(response.message);
      }
    });

  }

  validation(): boolean {
    let validate = true;
    if (this.text.isBlank()) {
      this.text.empty = true;
      return false;
    } else {
      this.text.empty = false;
    }

    const tablePlacehodlers = this.table.placeholders.map(x => x.id);
    const contentPlaceholders = this.text.content.match(/(?!#)([0-9]+)(?=#)/g);
    contentPlaceholders.forEach(element => {
      if (!tablePlacehodlers.includes(Number(element))) {
        this.text.extraPlaceholder = true;
        validate = false;
      }
    });
    if (!validate) {
      return false;
    }
    this.text.extraPlaceholder = false;
    return true;
  }

  onTextChanged(contentText: string) {
    if (this.text) {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.timer = timer(1500);
      this.timerSubscription = this.timer.subscribe(() => {
        this.validateTemplateContent();
      });
    }
  }

  exchangePlaceholder($event) {
    this.text.content += $event;
  }

  exchangeDeletePlaceholder($event) {
    this.text.deletePlaceholder($event);
  }

  validateTemplateContent() {
    for (let i = 0; i < this.table.placeholders.length; i++) {
      const ind = this.text.content.indexOf('#' + this.table.placeholders[i].id + '#');
      if (ind === -1) {
        this.table.placeholders.splice(i, 1);
      }
    }
  }

  updateTemplate() {
    this.template.content.payload.text = this.text.content;
    const updatedTemplate = new UpdateTemplateRequest(this.templateVersion.templateId, this.template.content);
    this.templateService.update(updatedTemplate)
      .subscribe(response => {
        this.toastr.successToastr('Template successfully updated (new template version is created).');
        this.clearModalContent();
        this.modal.hide();
        this.templateUpdated.emit(1);
      },
        error => this.toastr.errorToastr(error.message));
  }

  clearModalContent() {
    this.template.name = '';
    this.text.content = '';
    this.table.placeholders = [];
  }
}
