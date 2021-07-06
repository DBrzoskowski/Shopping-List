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
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

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
    ShoppingListComponent,
    ShoppingAddComponent,
    ShoppingItemComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: 'product-add', component: ProductAddComponent},
      {path: 'shopping-list', component: ShoppingListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    FormsModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
