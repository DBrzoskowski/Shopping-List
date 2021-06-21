import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(name: string, amount: number, price: number): Product {
    if (name.length <= 2) {
      alert('Please add a correct name!');
    }
    if (amount <= 0) {
      alert('Please enter correct amount!');
    }
    if (price <= 0) {
      alert('Please enter correct value!');
    }

    return {
      "name": name,
      "price": price,
      "amount": amount
    };
  }

}
