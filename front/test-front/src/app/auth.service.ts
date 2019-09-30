import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {routes} from './statics/routes';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public static getToken(): string {
    return localStorage.getItem('id_token');
  }

  public userAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    return (token !== undefined && token !== '' && token !== null);
  }

  public authUser(email: string, password: string) {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post<any>(routes.routeAuth, {email, password}).toPromise().then((res) => {
        this.setSession(res.token);
        resolve();
      }).catch((error) => {
        reject(error.error.message);
      });
    });
  }

  public createUserAndAuth(name: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        routes.routeCreateAndAuth,
        {name, email, password},
        {observe: 'response'}
      ).subscribe((item: any) => {
        this.setSession(item.headers.get('Token'));
        resolve();
      });
    });
  }

  public logout(): void {
    localStorage.removeItem('id_token');
  }

  private setSession(token: string): void {
    const expiresAt = moment();
    localStorage.setItem('id_token', token);
  }
}
