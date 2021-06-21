import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  name!: string;
  price!: number;
  amount!: number;
  @Output() onEditProduct: EventEmitter<Product> = new EventEmitter();
  @Input() selectedProduct!: Product;

  constructor() {
    this.selectedProduct = {
      amount: 0,
      name: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  editProduct() {
    if (this.name == null) {
      alert("Please write new product name!")
    }

    if (this.price == null) {
      alert("Please write new product price!")
    }

    if (this.amount == null) {
      alert("Please write new product amount!")
    }

    const editedProduct: Product = {
      "id": this.selectedProduct.id,
      "name": this.name,
      "price": this.price,
      "amount": this.amount,
      "totalPrice": this.price * this.amount,
      "isSelected": false
    }
    this.onEditProduct.emit(editedProduct);
  }

  //force reload page component after Product update.
  reloadCurrentPage() {
    window.location.reload();
  }
}

