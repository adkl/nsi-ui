import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { IncidentManagementRoutingModule } from './incident-management-routing.module';
import { AllIncidentsComponent } from './components/all-incidents/all-incidents.component';
import { ModalComponent } from './modal/modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettlementModalComponent } from './settlement-modal/settlement-modal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    IncidentManagementRoutingModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [AllIncidentsComponent, ModalComponent, SettlementModalComponent],
})
export class IncidentManagementModule { }
