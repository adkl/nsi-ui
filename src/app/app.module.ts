import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { UserAdministrationModule } from './user-administration/user-administration.module';

import {IncidentManagementModule} from './views/incident-management/incident-management.module';
import { DeviceManagementModule } from './views/device-management/device-management.module';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DocumentRepositoryModule } from './views/document-repository/document-repository.module';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { ReportingModule } from './reporting/reporting.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ng6-toastr-notifications';
import {NotificationService} from './shared/services/notification.service';
import {NotificationsModule} from './views/notifications/notifications.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { from } from 'rxjs';
import { ApiModule, BASE_PATH } from '../swagger';
import { environment } from '../environments/environment';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppendAuthHeadersHttpInterceptor } from './append-auth-headers.http-interceptor';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    DocumentRepositoryModule,
    ChartsModule,
    UserAdministrationModule,
    IncidentManagementModule,
    DeviceManagementModule,
    NotificationsModule,
    ApiModule,
    FormsModule,

    MsAdalAngular6Module.forRoot({
      tenant: 'eeb0ec62-30bf-4f96-a74c-285093c70f3d',
      clientId: '2f878677-1ce9-4bb1-9fdd-a2cf278ada94',
      redirectUri: environment.appUrl,
      endpoints: {},
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage'
    }),
    ReportingModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    { provide: BASE_PATH, useValue: environment.serviceUrl },
    AuthenticationGuard,
    NotificationService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: AppendAuthHeadersHttpInterceptor,
			multi: true,
		}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
