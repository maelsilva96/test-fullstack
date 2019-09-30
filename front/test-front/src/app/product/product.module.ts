import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductService} from './product.service';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent, ProductCreateComponent, ProductEditComponent],
  exports: [
    ProductComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {
}
