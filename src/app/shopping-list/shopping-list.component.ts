import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {ListService} from "../services/list.service";
import {TempListService} from "../services/templist.service";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  pageTitle = "Products List";
  errorMessage = '';
  products: Product[] = [];

  constructor(private productService: ProductService,
              private listService: ListService,
              private userList: TempListService) {
  }

  sendProduct(product: Product): void {
    this.userList.sendProduct(product);
  }

  clearProduct(): void {
    this.userList.clearProduct();
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }
}
