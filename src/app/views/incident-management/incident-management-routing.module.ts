import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllIncidentsComponent } from './components/all-incidents/all-incidents.component';

const routes: Routes = [
  {
    path: '',
    component: AllIncidentsComponent,
    data: {
      title: 'Incidents'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentManagementRoutingModule {}
