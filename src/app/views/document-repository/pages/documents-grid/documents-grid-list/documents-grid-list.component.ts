import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { DocumentService} from '../../../entities/document-services/document.service'
import {Document} from '../../../entities/document-models/document.model';
import { FileTypeService } from '../../../entities/document-services/file-type.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-documents-grid-list',
  templateUrl: './documents-grid-list.component.html',
  styleUrls: ['./documents-grid-list.component.scss']
})

export class DocumentsGridListComponent implements OnInit {

  nameFilter = '';
  descriptionFilter = '';

  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  pagedItems: Document[] = [];
  pager: any = {};
  selectedSize: any;
  private _searchTerm: string;
  
  document: Document = new Document();
  extensions: string[] = [];
  searchTerm = '';
  private documentService: DocumentService;
  private fileTypeService: FileTypeService;

  constructor(private paginationService: PaginationService,
    private docService: DocumentService, 
    private fileService: FileTypeService) {
      this.documentService = docService;
      this.fileTypeService = fileService;
     }
    
  ngOnInit() {
    this.documentService.getDocumentFromApi().subscribe((result: Document[]) => {
        this.documents = result;
        this.filteredDocuments = this.documents;
        this.setPage(1);
        this.fileTypeService.getExtensions().then((res) => {
           this.extensions = res;
        });
    }); 
  }

  OnDeleteEmit() {
    this.documentService.getDocumentFromApi().subscribe((result: Document[]) => {
      this.filteredDocuments = result;
      this.setPage(this.pager.currentPage); 
    });
  }

  searchDocuments(searchText){
    this.documentService.getDocumentFromApi().subscribe((result: Document[]) => {
    let doc = result;
    this.filteredDocuments = [];
    let filters = doc.filter((document: Document) => 
    document.name.includes(searchText.toLowerCase()));
    this.filteredDocuments = filters;
    this.setPage(this.pager.currentPage); 
    });
  }

  filterDocuments(searchText: string){
    this.documentService.getDocumentFromApi().subscribe((result: Document[]) => {
      let docs = result;
      this.filteredDocuments = [];
      docs.forEach(element => {
        this.fileTypeService.getFileExtensionById(element.fileTypeId).subscribe((res)=>{
            if(res == searchText.toLowerCase()){
              this.filteredDocuments.push(element);
              this.setPage(this.pager.currentPage); 
            }
          });
      }); 
      });
  }

  onFilterChange(newValue) {
    this.filterDocuments(newValue); 
  } 

  refreshList() {
    this.documentService.getDocumentFromApi().subscribe((res) => {
      this.filteredDocuments = res;
      this.setPage(this.pager.currentPage); 
    });
  }

  clickMethod($event) {
    $event.preventDefault();
    const fileElem = document.getElementById('fileElem');
    if (fileElem) {
      fileElem.click();
    }
  }

  handleFiles($event) {
    const files = $event.target.files;
    if (files.length) {
      const list = document.createElement('ul');
      for (let i = 0; i < files.length; i++) {
            let formDataInput = new FormData();
            formDataInput.append("file", files[i]);
            this.documentService.addDocument(formDataInput)
            .then(() => this.refreshList());
      }
    }
  }

  getFileTypeIdByExtension(name: string, type: string): Promise<number>{
    var typeExtension = name.split('.').pop();
    return this.fileTypeService.getFileTypeIdThroughExtension(typeExtension);
  }

  setPage(page) {
    if (page < 1) {
      return;
    }
    // get pager object from service
    this.pager = this.paginationService.getPager(this.filteredDocuments.length, page, this.selectedSize);
    this.getCurrentPageOfItems();
  }

  getCurrentPageOfItems() {
    // get current page of items
    this.pagedItems = this.filteredDocuments.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}