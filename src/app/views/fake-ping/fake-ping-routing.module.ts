import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakePingComponent } from './fake-ping.component';

const routes: Routes = [
 {
   path: '',
   component: FakePingComponent,
   data: {
     title: 'Fake ping'
   }
 }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class FakePingRoutingModule {}