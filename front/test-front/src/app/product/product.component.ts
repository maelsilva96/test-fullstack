import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {ProductList} from './productList';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public faEdit = faEdit;
  public faEye = faEye;
  public faTrash = faTrash;
  public product: Array<Product>;
  public messageError = '';
  public messageSuccess = '';

  constructor(private service: ProductService, private authService: AuthService) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe((data: ProductList) => {
      this.product = data.products;
    });
  }

  ngClick(id: number) {
    this.service.delete(id).subscribe(() => {
      this.messageError = '';
      this.messageSuccess = 'Produto deletadoo com sucesso!';
      const item = this.product.find(it => it.id === id);
      this.product.splice(this.product.indexOf(item), 1);
    }, (error) => {
      this.messageSuccess = '';
      this.messageError = error.error.message;
    });
  }

  public userLogged() {
    return this.authService.userAuthenticated();
  }
}
