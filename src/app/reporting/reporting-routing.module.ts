import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridViewComponent } from './grid-view/grid-view.component';
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

const routes: Routes = [
  {
    path: '',
    component: GridViewComponent,
    data: {
      title: 'GridView'
    }
  },
  {
    path: 'gridview',
    component: GridViewComponent,
    data: {
      title: 'GridView'
    }
  },
  {
    path: 'filterpicker',
    component: FilterPickerComponent,
    data: {
      title: 'FilterPicker'
    }
  },
  {
    path: 'TenantActiveUsers',
    component: TenantActiveUsersComponent,
    data: {
      title: 'TenantActiveUsers'
    }
  },
  {
    path: 'TenantCommonIncidents',
    component: TenantCommonIncidentsComponent,
    data: {
      title: 'TenantCommonIncidents'
    }
  },
  {
    path: 'UserLoginsDaysPerWeek',
    component: UserLoginsDaysPerWeekComponent,
    data: {
      title: 'UserLoginsDaysPerWeek'
    }
  },
  {
    path: 'UserLoginsTimeOfDay',
    component: UserLoginsTimeOfDayComponent,
    data: {
      title: 'UserLoginsTimeOfDay'
    }
  },
  {
    path: 'SMSSentPerTimePeriod',
    component: SMSSentPerTimePeriodComponent,
    data: {
      title: 'SMSSentPerTimePeriod'
    }
  },
  {
    path: 'RuleBrakes',
    component: RuleBrakesComponent,
    data: {
      title: 'RuleBrakes'
    }
  },
  {
    path: 'UserSpecificDevices',
    component: UserSpecificDevicesComponent,
    data: {
      title: 'UserSpecificDevices'
    }
  },
  {
    path: 'IncidentsSpecificTimePeriod',
    component: IncidentsSpecificTimePeriodComponent,
    data: {
      title: 'IncidentsSpecificTimePeriod'
    }
  },
  {
    path: 'DeviceIncidentsSpecificTimePeriod',
    component: DeviceIncidentsSpecificTimePeriodComponent,
    data: {
      title: 'DeviceIncidentsSpecificTimePeriod'
    }
  },
  {
    path: 'RulesOnSpecificTimePeriod',
    component: RulesOnSpecificTimePeriodComponent,
    data: {
      title: 'RulesOnSpecificTimePeriod'
    }
  },
  {
    path: 'DevicesXIncidentsInTimePeriod',
    component: DevicesXIncidentsInTimePeriodComponent,
    data: {
      title: 'DevicesXIncidentsInTimePeriod'
    }
  },
  {
    path: 'IncidentsCommonTypes',
    component: IncidentsCommonTypesComponent,
    data: {
      title: 'IncidentsCommonTypes'
    }
  },
  {
    path: 'IncidentsPriorityInTimePeriod',
    component: IncidentsPriorityInTimePeriodComponent,
    data: {
      title: 'IncidentsPriorityInTimePeriod'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule {}
