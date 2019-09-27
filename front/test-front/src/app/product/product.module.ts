import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ProductService} from './product.service';



@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent, ProductCreateComponent, ProductEditComponent],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
