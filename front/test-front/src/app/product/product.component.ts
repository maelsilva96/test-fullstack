import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {ProductList} from './productList';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: Array<Product>;

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe((data: ProductList) => {
      this.product = data.products;
    });
  }

}
