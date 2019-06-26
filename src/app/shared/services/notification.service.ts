import {NotificationModel} from '../notification-models/notification.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class NotificationService {
  notificationsChanged = new EventEmitter<NotificationModel[]>();
  API: any = environment.serviceUrl;
  getAllNotificationsUrl = this.API + '/api/WebNotification/GetAllWebNotifications';
  getUnreadNotificationsUrl = this.API + '/api/WebNotification/GetAllUnSeenWebNotifications';
  updateUnseenNotificationsUrl = this.API + '/api/WebNotification/UpdateAllUnseenWebNotifications';
  addNotificationUrl = this.API + '/api/Notification/add';

  private token = sessionStorage.getItem('id_token');
  private options = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  unreadNotificationsCountChanged = new EventEmitter<number>();

  private notificationsCount: number;
  private unreadNotificationsCount = 0;

  constructor(private http: HttpClient) {}

  private notifications: NotificationModel[] = [];
  private unreadNotifications: NotificationModel[] = [];

  loadNotifications() {
    this.getNotificationsFromApi()
      .subscribe(
        (data: NotificationModel[]) => {
          console.log('DATA ALL: ' + data);
          this.notifications = data['data'];
          this.notificationsChanged.emit(this.notifications);
          },
        error1 => console.log(error1)
      );
    return this.notifications.slice();
  }

  loadUnreadNotifications() {
    this.http.get<NotificationModel[]>(this.getUnreadNotificationsUrl, this.options)
      .subscribe(
      (data: NotificationModel[]) => {
        console.log('DATA UNREAD: ' + data);
        this.unreadNotifications = data['data'];
        this.unreadNotificationsCount = this.unreadNotifications.length;
        this.unreadNotificationsCountChanged.emit(this.unreadNotificationsCount);
        console.log('Get unread notifications emitted: ' + this.unreadNotificationsCount);
      },
        error1 => console.log(error1)
    );
  }

  getNotifications() {
    return this.notifications;
  }

  readNotifications() {
    this.http.put<NotificationModel[]>(this.updateUnseenNotificationsUrl, null, this.options)
      .subscribe(
        (data: NotificationModel[]) => {
          console.log('DATA Seen all: ' + data);
          this.unreadNotificationsCount = 0;
          this.unreadNotificationsCountChanged.emit(this.unreadNotificationsCount);
          console.log('Unread notifications cleared! ' + this.unreadNotificationsCount);
        },
        error1 => console.log(error1)
      );
  }

  getNotificationsFromApi (): Observable<NotificationModel[]> {
    return this.http.get<NotificationModel[]>(this.getAllNotificationsUrl, this.options);
  }

  addNotifications(notification: any) {
    this.http.post<NotificationModel[]>(this.addNotificationUrl, notification, this.options)
      .subscribe(
        (data: NotificationModel[]) => {
          console.log('DATA Seen all: ' + data);
          this.unreadNotificationsCount = 0;
          this.unreadNotificationsCountChanged.emit(this.unreadNotificationsCount);
          console.log('Unread notifications cleared! ' + this.unreadNotificationsCount);
        },
        error1 => console.log(error1)
      );
  }

}
