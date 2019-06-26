import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// Devices 
import { IndexDevices } from './components/device/index/index.component';
import { DeviceCard } from './components/device/card/card.component';
import { CreateDevice } from './components/device/modals/create/modal-create.component';
import { EditDevice } from './components/device/modals/edit/modal-edit.component';

// Device types 
import { IndexDeviceTypes } from './components/device-type/index/index.component';
import { CreateDeviceType } from './components/device-type/modals/create/modal-create.component';
import { EditDeviceType } from './components/device-type/modals/edit/modal-edit.component';

import { DeviceManagementRoutingModule } from './device-management-routing.module';

@NgModule({
  imports: [
    DeviceManagementRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    IndexDevices,
    DeviceCard,
    CreateDevice,
    EditDevice,
    IndexDeviceTypes,
    CreateDeviceType,
    EditDeviceType
  ]
})

export class DeviceManagementModule { }
