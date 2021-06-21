import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {IdGenService} from "../services/idgen.service";
import {faPencilRuler} from "@fortawesome/free-solid-svg-icons/faPencilRuler";
import {faPenSquare} from "@fortawesome/free-solid-svg-icons/faPenSquare";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  errorMessage = '';
  faTimes = faTimes;
  faPencil = faPenSquare;

  //product sending to product edit component
  productToSend!: Product;

  @Input() productToAdd!: Product;
  @Input() productToEdit!: Product;

  constructor(private productService: ProductService,
              private idGenerator: IdGenService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products))
  }

  addCreatedProduct(product: Product) {
    const newProduct: Product = {
      "id": this.idGenerator.generateRandomValueId(),
      "name": product.name,
      "price": product.price,
      "amount": product.amount,
      "totalPrice": product.price * product.amount,
      "isSelected": false
    };
    this.productService.addProduct(newProduct).subscribe((product) => this.products.push(product));
  }

  editSelectedProduct(product: Product) {
    this.productService.updateProduct(product).subscribe();
  }

  getLastItemIndex(list: Product[]): number {
    return list.length + 1;
  }

  onDelete(product: Product) {
    this.productService
      .deleteProduct(product)
      .subscribe(() => (this.products = this.products.filter((p: Product) => p.id !== product.id)))
  }

  onEdit(product: Product): void {
    this.productToSend = product;
  }
}
