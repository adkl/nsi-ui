import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicePingComponent } from './device-ping.component';
import { DevicePingRoutingModule } from './device-ping-routing.module';
import { DevicePingService } from './device-ping.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { GrdFilterPipe } from '../../pipes/grd-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevicePropertyValueModalComponent } from './device-property-values-modal/device-property-values-modal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    DevicePingRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    CollapsibleModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    DevicePingService
  ],
  declarations: [
    DevicePingComponent,
    DevicePropertyValueModalComponent,
    GrdFilterPipe
  ],
  exports: [GrdFilterPipe],
  entryComponents: [DevicePropertyValueModalComponent]
})
export class DevicePingModule { }
