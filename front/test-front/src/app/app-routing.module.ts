import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductComponent} from './product/product.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {NotificationComponent} from './notification/notification.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'entrar', component: LoginComponent},
  {path: 'cadastrar', component: RegisterComponent},
  {path: 'produto/novo', component: ProductCreateComponent, canActivate: [AuthGuard]},
  {path: 'produto/visualizar/:id', component: ProductDetailsComponent, canActivate: [AuthGuard]},
  {path: 'produto/editar/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'noticacoes', component: NotificationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
