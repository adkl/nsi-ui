import {Component, Input, OnInit} from '@angular/core';
import { navItems } from './../../_nav';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  public updatesCount = 0;

  constructor(private notificationService: NotificationService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  clearNotifications() {
    this.notificationService.readNotifications();
    this.updatesCount = 0;
    console.log('Clear notifications: ' + this.updatesCount);
  }

  ngOnInit(): void {
    this.notificationService.loadUnreadNotifications();
    this.notificationService.unreadNotificationsCountChanged
      .subscribe(
        (unreadCount: number) => {
          this.updatesCount = unreadCount;
          console.log('Unread notifications changed: ' + this.updatesCount);
        }
      );
  }
}
