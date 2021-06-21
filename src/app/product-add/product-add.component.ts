import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  name!: string;
  price!: number;
  amount!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  addProduct() {
    if (!this.name || this.name.length <= 2) {
      alert('Please add a correct name!');
      return;
    }
    if (this.amount <= 0) {
      alert('Please enter correct amount!');
      return;
    }
    if (this.price <= 0) {
      alert('Please enter correct value!');
      return;
    }

    const newProduct = {
      "name": this.name,
      "price": this.price,
      "amount": this.amount
    };

    this.onAddProduct.emit(newProduct)

    this.name = '';
    this.amount = 0;
    this.price = 0;
  }
}
