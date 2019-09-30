import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductList} from './productList';
import {routes} from '../statics/routes';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts() {
    return this.http.get<ProductList>(routes.routeListProducts);
  }

  public sendImage(formData: FormData) {
    return this.http.post(routes.routeSaveImage, formData, {
      observe: 'response',
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${AuthService.getToken()}`)
    });
  }

  public save(name: string, description: string, image: string, evaluation: number) {
    return this.http.post(routes.routeCreateProduct, {
      name, description, image, evaluation
    }, {
      observe: 'response',
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${AuthService.getToken()}`)
    });
  }

  public get(id: number) {
    return this.http.get<any>(routes.routeGetOrUpdateOrDeleteProduct + id, {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${AuthService.getToken()}`)
    });
  }

  public update(id: number, name: string, description: string, image: string, evaluation: number) {
    return this.http.put(routes.routeGetOrUpdateOrDeleteProduct + id, {
      name, description, image, evaluation
    }, {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${AuthService.getToken()}`)
    });
  }

  public delete(id: number) {
    return this.http.delete(routes.routeGetOrUpdateOrDeleteProduct + id, {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${AuthService.getToken()}`)
    });
  }
}
