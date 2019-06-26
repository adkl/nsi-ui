import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentRepositoryRoutingModule } from './document-repository-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService, TabsModule } from 'ngx-bootstrap';
import { DocumentsGridListComponent } from './pages/documents-grid/documents-grid-list/documents-grid-list.component';
import { DocumentsGridItemComponent } from './pages/documents-grid/documents-grid-item/documents-grid-item.component';
import { PaginationService } from './pages/documents-grid/pagination.service';
import  { HttpClientModule } from '@angular/common/http';
import {DocumentService} from './entities/document-services/document.service';
import {FileTypeService} from './entities/document-services/file-type.service';

@NgModule({
  imports: [
    CommonModule,
    DocumentRepositoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot()    
  ],
  declarations: [
    DocumentsGridListComponent,
    DocumentsGridItemComponent],
  providers: [
    BsModalService, 
    PaginationService, 
    FileTypeService,
    DocumentService],
  bootstrap: [DocumentsGridListComponent]
})
export class DocumentRepositoryModule { }
