import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { UserAdministrationComponent } from './user-administration/user-administration/user-administration.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {
  //   path: 'users',
  //   component: UserAdministrationComponent,
  //   data: {
  //     title: 'User Administration'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'adal-test',
        loadChildren: './views/adal-test/adal-test.module#AdalTestModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'fake-ping',
        loadChildren: './views/fake-ping/fake-ping.module#FakePingModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'device-ping',
        loadChildren: './views/device-ping/device-ping.module#DevicePingModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'incident-management',
        loadChildren: './views/incident-management/incident-management.module#IncidentManagementModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'template-manager',
        loadChildren: './views/template-manager/template-manager.module#TemplateManagerModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'reporting',
        loadChildren: './reporting/reporting.module#ReportingModule'
      },
      {
        path: 'rule-engine',
        loadChildren: './views/rule-engine/rule-engine.module#RuleEngineModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'users',
        loadChildren: './user-administration/user-administration.module#UserAdministrationModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'documents',
        loadChildren: './views/document-repository/document-repository.module#DocumentRepositoryModule'
      },
      {
        path: 'device-management',
        loadChildren: './views/device-management/device-management.module#DeviceManagementModule',
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
