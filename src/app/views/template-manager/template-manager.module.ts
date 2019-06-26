import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateManagerRoutingModule } from './template-manager-routing.module';
import { SearchComponent } from './components/search/search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DeleteTemplateComponent } from './components/delete-template/delete-template.component';
import { SaveTemplateComponent } from './components/save-template/save-template.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TableViewComponent } from './components/create-edit-template/table-view/table-view.component';
import { TextViewComponent } from './components/create-edit-template/text-view/text-view.component';
import { ViewTemplatesComponent } from './components/view-templates/view-templates.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CreateEditTemplateComponent } from './components/create-edit-template/create-edit-template.component'
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    TemplateManagerRoutingModule,
    NgSelectModule,
    FormsModule,
    ModalModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [SearchComponent,
    DeleteTemplateComponent,
    SaveTemplateComponent,
    TableViewComponent,
    TextViewComponent,
    ViewTemplatesComponent,
    CreateEditTemplateComponent
  ]
})
export class TemplateManagerModule { }
