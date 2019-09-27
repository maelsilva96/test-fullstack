import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'entrar', component: LoginComponent},
  {path: 'cadastrar', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
