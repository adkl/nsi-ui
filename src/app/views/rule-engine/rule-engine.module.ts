import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DeleteRuleComponent } from './components/delete-rule/delete-rule.component';
import { ConditionComponent } from './components/condition/condition.component';
import { AddEditRuleComponent } from './components/add-edit-rule/add-edit-rule.component';
import { ViewRulesComponent } from './components/view-rules/view-rules.component';
import { RuleEngineRoutingModule } from './rule-engine-routing.module';
import { ParameterSettingComponent } from './components/parameter-setting/parameter-setting.component';
import { ActionComponent } from './components/action/action.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { RuleComponent } from './components/rule/rule.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RuleEngineRoutingModule,
    ModalModule.forRoot(),
    SelectDropDownModule,
    FormsModule
  ],
  declarations: [
    DeleteRuleComponent,
    ConditionComponent,
    AddEditRuleComponent,
    ViewRulesComponent,
    ParameterSettingComponent,
    ActionComponent,
    RuleComponent
  ]
})
export class RuleEngineModule { }
