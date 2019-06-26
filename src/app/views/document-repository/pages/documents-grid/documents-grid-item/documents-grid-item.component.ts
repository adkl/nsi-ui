import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DocumentService } from '../../../entities/document-services/document.service';
import swal from 'sweetalert2';
import { BsModalService } from 'ngx-bootstrap';
import { Document } from '../../../entities/document-models/document.model';
import { FileTypeService } from '../../../entities/document-services/file-type.service';
import { ExtensionImage } from '../../../entities/enums/extension-image';
import { Http, ResponseContentType, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx' ;
import * as fileSaver from 'file-saver';
import { HttpHeaders } from '@angular/common/http';
 

@Component({
  selector: 'app-documents-grid-item',
  templateUrl: './documents-grid-item.component.html',
  styleUrls: ['./documents-grid-item.component.scss']
})
export class DocumentsGridItemComponent implements OnInit {

  @Input() document: Document;
  @Output() newChange: EventEmitter<number> = new EventEmitter<number>();
  imageUrl: string = '';

  constructor(private documentService: DocumentService, private fileTypeService: FileTypeService, private http: Http) { }

  OnDelete() {
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, continue!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-deafult',
      buttonsStyling: false,
      reverseButtons: false,
    }).then((result) => {
      if (result.value) {
        this.documentService.deleteDocument(this.document.documentId).subscribe((success) => {
          if(success){
            this.newChange.emit();
          }
        });
       } else if (result.dismiss === swal.DismissReason.cancel) { }
    });
  }

  onDownload(document: Document) {
  this.documentService.downloadDocument(document.documentId)
      .subscribe(response => {
        const blob = new Blob([response]);
        this.fileTypeService.getFileExtensionById(document.fileTypeId).subscribe((res)=>{
          fileSaver.saveAs(blob, document.name + '.' + res);
        })
      });
  }



  ngOnInit() {
    this.fileTypeService.getFileExtensionById(this.document.fileTypeId).subscribe((extension: string) => {
      this.imageUrl = 'assets/img/document-repository-module-img/'; 
      if(ExtensionImage[extension]){
        this.imageUrl = this.imageUrl + ExtensionImage[extension];
      }
      else{
        this.imageUrl = this.imageUrl + 'unknown.png';
      }
    })
  }
}
