import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ecom/home/home.component';
import { ConnectComponent } from './ecom/connect/connect.component';
import { SubscribeComponent } from './components/ecom/subscribe/subscribe.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { ProductListComponent } from './components/seller/product-list/product-list.component';
import { ProductUpdateComponent } from './components/seller/product-update/product-update.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/admin/category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnectComponent,
    SubscribeComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
