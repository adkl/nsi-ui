import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRulesComponent } from './components/view-rules/view-rules.component';

const routes: Routes = [
  {
    path: '',
    component: ViewRulesComponent,
    data: {
      title: 'Rule Engine'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleEngineRoutingModule {}
