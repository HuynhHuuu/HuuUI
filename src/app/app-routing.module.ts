import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

{ path: 'cart', loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },

{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },

{ path: 'add', loadChildren: () => import('./pages/addproduct/addproduct.module').then(m => m.AddproductModule) }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
