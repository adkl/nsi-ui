import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TemplatePlaceholderImpl } from '../../../models/TemplatePlaceholderImpl';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  viewProviders: [{ 
    provide: ControlContainer, 
    useExisting: NgForm
  }]
})
export class TableViewComponent implements OnInit {

  @Output() emitPlaceholder = new EventEmitter<string>();
  @Output() emitDeletePlaceholder = new EventEmitter<string>();

  placeholders: TemplatePlaceholderImpl[];
  types: string[];

  constructor() { }

  ngOnInit() {
    this.placeholders = new Array<TemplatePlaceholderImpl>();
    this.types = ['text', 'number', 'date', 'email', 'url'];
  }

  addPlaceholder() {
    const placeholder = new TemplatePlaceholderImpl();
    if (this.placeholders.length === 0) {
      placeholder.id = 1;
    } else {
      placeholder.id = this.placeholders[this.placeholders.length - 1].id + 1;
    }
    placeholder.description = '';
    placeholder.type = this.types[0];
    placeholder.length = null;
    this.placeholders.push(placeholder);
    this.emitPlaceholder.emit('#' + placeholder.id + '#');
  }

  deletePlaceholder(placeholderID: number) {
    this.placeholders.splice(this.placeholders.findIndex(x => x.id === placeholderID), 1);
    this.emitDeletePlaceholder.emit('#' + placeholderID + '#');
  }
}
