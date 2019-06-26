import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ReportingRoutingModule } from './reporting-routing.module';
import { FilterPickerComponent } from './filter-picker/filter-picker.component';
import { TenantActiveUsersComponent } from './tenant-active-users/tenant-active-users.component';
import { TenantCommonIncidentsComponent } from './tenant-common-incidents/tenant-common-incidents.component';
import { UserLoginsDaysPerWeekComponent } from './user-logins-days-per-week/user-logins-days-per-week.component';
import { UserLoginsTimeOfDayComponent } from './user-logins-time-of-day/user-logins-time-of-day.component';
import { SMSSentPerTimePeriodComponent } from './sms-sent-per-time-period/sms-sent-per-time-period.component';
import { RuleBrakesComponent } from './rule-brakes/rule-brakes.component';
import { UserSpecificDevicesComponent } from './user-specific-devices/user-specific-devices.component';
import { IncidentsSpecificTimePeriodComponent } from './incidents-specific-time-period/incidents-specific-time-period.component';
import { DeviceIncidentsSpecificTimePeriodComponent } from './device-incidents-specific-time-period/device-incidents-specific-time-period.component';
import { RulesOnSpecificTimePeriodComponent } from './rules-on-specific-time-period/rules-on-specific-time-period.component';
import { DevicesXIncidentsInTimePeriodComponent } from './devices-x-incidents-in-time-period/devices-x-incidents-in-time-period.component';
import { IncidentsCommonTypesComponent } from './incidents-common-types/incidents-common-types.component';
import { IncidentsPriorityInTimePeriodComponent } from './incidents-priority-in-time-period/incidents-priority-in-time-period.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportingRoutingModule,
    ChartsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AlertModule
  ],
  declarations: [
    GridViewComponent,
    FilterPickerComponent,
    TenantActiveUsersComponent,
    TenantCommonIncidentsComponent,
    UserLoginsDaysPerWeekComponent,
    UserLoginsTimeOfDayComponent,
    SMSSentPerTimePeriodComponent,
    RuleBrakesComponent,
    UserSpecificDevicesComponent,
    IncidentsSpecificTimePeriodComponent,
    DeviceIncidentsSpecificTimePeriodComponent,
    RulesOnSpecificTimePeriodComponent,
    DevicesXIncidentsInTimePeriodComponent,
    IncidentsCommonTypesComponent,
    IncidentsPriorityInTimePeriodComponent
  ]
})
export class ReportingModule { }
