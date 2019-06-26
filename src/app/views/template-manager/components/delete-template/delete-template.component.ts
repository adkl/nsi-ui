import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.scss']
})
export class DeleteTemplateComponent implements OnInit {
  @Output() templateVersionDeleted = new EventEmitter<number>();
  @ViewChild('deleteTemplateModal') modal: any;
  id: number;

  constructor(private templateService: TemplateService,
    private toastr: ToastrManager) { }

  ngOnInit() { }

  openModal() {
    this.modal.show();
  }

  deleteTemplate() {
    this.templateService.deleteTemplateVersionById(this.id).subscribe(response => {
      this.toastr.successToastr('Template version successfuly deleted.');
      this.templateVersionDeleted.emit(1);
    },
    error => {
      this.toastr.errorToastr('Template version could not be deleted.');
    });
    this.modal.hide();
  }
}
