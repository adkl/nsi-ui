import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-save-template',
  templateUrl: './save-template.component.html',
  styleUrls: ['./save-template.component.scss']
})
export class SaveTemplateComponent implements OnInit {
  @ViewChild('saveTemplateModal') modal: any;

  id: number;
  code: string;
  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  openModal(id: number, code: string) {
    this.modal.show();
    this.id = id;
    this.code = code;
  }

  saveTempalteToPdf() {
    this.templateService.exportTemplateVersionById(this.id, this.code, "PDF");
  }
  saveTempalteToHtml() {
    this.templateService.exportTemplateVersionById(this.id, this.code, "HTML");
  }
}
