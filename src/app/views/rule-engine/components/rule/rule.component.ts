import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rule } from '../../models/Rule';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html'
})
export class RuleComponent implements OnInit {
  @Input() rule: Rule;
  @Output() deleted = new EventEmitter();

  showConditions = false;
  showActions = false;
  showDescription = false;

  constructor() { }

  ngOnInit() {
  }
}
