import {NgModule} from '@angular/core';
import {NotificationsRoutingModule} from './notifications-routing.module';
import {NotificationsListComponent} from './notifications-list.component';
import {NotificationItemComponent} from './notification-item/notification-item.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    NotificationsRoutingModule,
    CommonModule
  ],
  declarations: [ NotificationsListComponent, NotificationItemComponent ]
})

export class NotificationsModule {
}
