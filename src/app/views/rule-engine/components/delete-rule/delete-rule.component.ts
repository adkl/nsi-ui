import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-rule',
  templateUrl: './delete-rule.component.html'
})
export class DeleteRuleComponent implements OnInit {
  @Output() confirmed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
