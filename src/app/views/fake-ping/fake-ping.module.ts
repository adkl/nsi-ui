import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FakePingComponent } from './fake-ping.component';
import { FakePingRoutingModule } from './fake-ping-routing.module';
import { FakePingService } from './shared/fake-ping.service';
import { PropertyFullService } from './shared/property-full.service';

@NgModule({
 imports: [
   FakePingRoutingModule,
   CommonModule,
   ChartsModule,
   BsDropdownModule,
     FormsModule,
 ],
 providers: [
     FakePingService,
     PropertyFullService
 ],
 declarations: [ FakePingComponent ]
})
export class FakePingModule { }