import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DevicePingComponent } from './device-ping.component';

const routes: Routes = [
  {
    path: '',
    component: DevicePingComponent,
    data: {
      title: 'Device Ping'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicePingRoutingModule {}
