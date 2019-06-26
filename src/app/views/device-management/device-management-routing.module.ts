import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexDevices } from './components/device/index/index.component';
import { IndexDeviceTypes } from './components/device-type/index/index.component';
import { CreateDeviceType } from './components/device-type/modals/create/modal-create.component';

const routes: Routes = [
  {
    path: '',
    component: IndexDevices,
    data: {
      title: 'Your devices'
    }
  },
  {
    path: 'types',
    component: IndexDeviceTypes,
    data: {
      title: 'Device types'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceManagementRoutingModule {}
