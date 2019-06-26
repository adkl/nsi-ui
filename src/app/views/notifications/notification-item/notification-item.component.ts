import {Component, Input, OnInit} from '@angular/core';
import {NotificationModel} from '../../../shared/notification-models/notification.model';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: NotificationModel;

  ngOnInit() {
  }

}
