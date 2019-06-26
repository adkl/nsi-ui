import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AdalTestComponent } from './adal-test.component';
import { AdalTestRoutingModule } from './adal-test-routing.module';

@NgModule({
  imports: [
    AdalTestRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ AdalTestComponent ]
})
export class AdalTestModule { }
