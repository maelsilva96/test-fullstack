import {Component, OnInit} from '@angular/core';
import {NotificationService} from './notification/notification.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-front';

  constructor(private notificationService: NotificationService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.notificationService.loadNotifications();
  }

  public getCountNotifications() {
    return this.notificationService.getNotificationsCount();
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  public userLogged() {
    return this.authService.userAuthenticated();
  }
}
