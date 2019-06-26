import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdalTestComponent } from './adal-test.component';

const routes: Routes = [
  {
    path: '',
    component: AdalTestComponent,
    data: {
      title: 'ADAL Test'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdalTestRoutingModule {}
