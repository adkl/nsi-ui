import { Component, OnInit, ViewChild, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { DeleteTemplateComponent } from '../delete-template/delete-template.component';
import { Folder } from '../../models/interfaces/Folder';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('deleteTemplateModal') deleteTemplateComponent: DeleteTemplateComponent;
  @Output() emitFolder = new EventEmitter<number>();
  @Output() emitTitle = new EventEmitter<string>();
  @Input() folders: Folder[];

  titles: string[];

  selectedTitle: string;
  selectedFolderId: number;

  constructor() { }

  ngOnInit() { }

  changedFolder() {
    this.emitFolder.emit(this.selectedFolderId);
  }

  changedSearchText() {
    this.emitTitle.emit(this.selectedTitle);
  }
}
