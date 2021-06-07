import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '**', redirectTo: '/', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
