import { Component, OnInit } from '@angular/core';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notifications: Array<any>;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe((data) => {
      this.notifications = data.logsUser;
    });
  }

}
