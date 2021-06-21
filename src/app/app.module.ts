import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { NavigationComponent } from './navigation/navigation.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ButtonComponent } from './button/button.component';
import {FormsModule} from "@angular/forms";
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductEditComponent } from './product-edit/product-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ParentListComponent } from './parent-list/parent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
    NavigationComponent,
    ProductAddComponent,
    NavigationComponent,
    ButtonComponent,
    ProductListItemComponent,
    ProductEditComponent,
    ParentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'product-list', component: ProductListComponent},
      {path: 'product-add', component: ProductAddComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '**', redirectTo: '/', pathMatch: 'full'}
    ]),
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
