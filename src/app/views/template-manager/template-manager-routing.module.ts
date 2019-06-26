import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewTemplatesComponent } from './components/view-templates/view-templates.component';

const routes: Routes = [
  {
    path: "",
    component: ViewTemplatesComponent,
    data: {
      title: "Template management"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateManagerRoutingModule { }
