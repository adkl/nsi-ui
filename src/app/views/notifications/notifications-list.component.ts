import { Component, OnInit } from '@angular/core';
import {NotificationModel} from '../../shared/notification-models/notification.model';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {
  notifications: NotificationModel[];
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notificationsChanged.
      subscribe(
      (notifications: NotificationModel[]) => {
        this.notifications = notifications;
      }
    );
    this.notifications = this.notificationService.loadNotifications();
    // this.notifications = this.notificationService.getNotifications();
  }
}
