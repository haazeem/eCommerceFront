import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/ecom/home/home.component';
import { ConnectComponent } from './components/ecom/connect/connect.component';
import { SubscribeComponent } from './components/ecom/subscribe/subscribe.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { ProductListComponent } from './components/seller/product-list/product-list.component';
import { ProductUpdateComponent } from './components/seller/product-update/product-update.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/admin/category-update/category-update.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'

},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'connect',
  component: ConnectComponent
},
{
  path: 'subscribe',
  component: SubscribeComponent
},
{
  path: 'product-add',
  component: ProductAddComponent
},
{
  path: 'product-list',
  component: ProductListComponent
},
{
  path: 'product-update',
  component: ProductUpdateComponent
},
{
  path: 'category-add',
  component: CategoryAddComponent
},
{
  path: 'category-list',
  component: CategoryAddComponent
},
{
  path: 'category-update',
  component: CategoryUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
