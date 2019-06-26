import { Component, OnInit, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss']
})
export class TextViewComponent implements OnInit, OnChanges {

  @Input() recievePlaceholder: string;
  @Input() recieveDeletePlaceholder: string;
  @Output() textChanged = new EventEmitter<string>();

  content: string;
  empty: boolean;
  extraPlaceholder: boolean;

  constructor() { }

  ngOnInit() {
    this.content = '';
    this.empty = false;
    this.extraPlaceholder = false;
  }

  ngOnChanges() {
    this.textChanged.emit("");
  }

  addPlacehodler(data) {
    this.content += this.recievePlaceholder;
  }

  deletePlaceholder(data) {
    while (this.content.includes(data)) {
      this.content = this.content.replace(data, '');
    }
  }

  isBlank() {
    return (!this.content || /^\s*$/.test(this.content));
  }
}
