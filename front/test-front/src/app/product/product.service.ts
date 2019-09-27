import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductList} from './productList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly routeBase: string = 'http://localhost:3333/product'

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get<ProductList>(this.routeBase + '/list');
  }
}
