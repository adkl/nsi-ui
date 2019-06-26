import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { RuleService } from '../../services/rule/rule.service';
import { Rule } from '../../models/Rule';
import { Condition } from '../../models/Condition';
import { Action } from '../../../device-management/models/Action';

@Component({
  selector: 'app-add-edit-rule',
  templateUrl: './add-edit-rule.component.html'
})
export class AddEditRuleComponent implements OnInit {
  @ViewChild('myModal') modal: any;
  @Output() added = new EventEmitter();

  name: string = '';
  description: string = '';
  conditions: any[] = [];
  actions: any[] = [];
  errors: any[] = [];
  loading = false;

  constructor(private ruleService: RuleService) { }

  ngOnInit() {
    this.reset();
  }

  addNewCondition() {
    this.conditions.push({
      deviceId: 0,
      parameterId: 0,
      comparisonOperator: '=',
      parameterValue: ''
    });
  }

  addNewAction() {
    this.actions.push({
      deviceId: 0,
      actionId: 0,
      parameters: []
    });
  }

  deleteCondition(index) {
    this.conditions.splice(index, 1);
  }

  openModal() {
    this.reset();
    this.modal.show();
  }

  closeModal() {
    this.modal.hide();
  }

  reset() {
    this.name = '';
    this.description = '';
    this.conditions = [];
    this.actions = [];
    this.errors = [];
    this.loading = false;

    this.addNewAction();
    this.addNewCondition();
  }

  getPayload() {
    return {
      name: this.name,
      description: this.description,
      conditions: this.conditions,
      actions: this.actions
    };
  }

  storeRule() {
    this.errors = [];
    this.loading = true;

    this
      .ruleService
      .store(this.getPayload())
      .subscribe(
        () => {
          this.closeModal();
          this.added.emit();
        },
        error => {
          this.loadErrorsFromResponse(error);
          this.loading = false;
        }
      );
  }

  loadErrorsFromResponse(response) {   
    Object.entries(response.error.modelState).forEach(
      ([key, value]) => this.errors.push({ ruleName: key, value : value[0]})
    );
  }

  checkIfThereIsError(errorName){
    return this.errors.find(x => x.ruleName.includes(errorName));
  }

  errorMessage(errorName){
    return this.errors.find(x => x.ruleName.includes(errorName)).value;
  }
}
