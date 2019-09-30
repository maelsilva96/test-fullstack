import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {routes} from '../statics/routes';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Array<any>;

  constructor(private http: HttpClient) {
  }

  public getNotifications() {
    return this.http.get<any>(routes.routeNotifications, {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${AuthService.getToken()}`)
    });
  }

  public loadNotifications(): void {
    this.getNotifications().subscribe((item) => {
      this.notifications = item.logsUser;
    });
  }

  public getNotificationsCount() {
    if (this.notifications !== undefined && this.notifications !== null) { return this.notifications.length; }
    return 0;
  }

  public pushNotificationBlank() {
    return this.notifications.push({});
  }
}
