import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List} from "../models/list";
import {Product} from "../models/product";
import {Subscription} from "rxjs";
import {TempListService} from "../services/templist.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {ListService} from "../services/list.service";
import {IdGenService} from "../services/idgen.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  lists!: List[];
  title!: string;
  id!: number;

  products: Product[] = [];
  subscription!: Subscription;

  selectedPrice: number = 0;
  totalPrice: number = 0;
  unselectedPrice: number = 0;

  errorMessage: string = '';
  faTimes = faTimes

  @Output() onAddList: EventEmitter<Product> = new EventEmitter();

  constructor(private userList: TempListService,
              private listService: ListService,
              private idGenerator: IdGenService) {

    this.subscription = this.userList.onProduct().subscribe(product => {
      if (product) {
        this.products.push(product);
        this.getTotalPrice(product);
      } else {
        this.products = [];
      }
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(index: number): void {
    this.totalPrice -= Number(this.products[index].totalPrice);

    if (this.products[index].isSelected)
      this.selectedPrice -= Number(this.products[index].totalPrice);

    if (!this.products[index].isSelected)
      this.unselectedPrice -= Number(this.products[index].totalPrice);

    this.products.splice(index, 1);
  }

  getTotalPrice(product: Product): void {
    this.totalPrice += Number(product.totalPrice);
    this.unselectedPrice += Number(product.totalPrice);
  }

  selectProduct($event: Event, i: number): void {
    this.products[i].isSelected = !this.products[i].isSelected;
    if (this.products[i].isSelected) {
      this.selectedPrice += Number(this.products[i].totalPrice);
      this.unselectedPrice -= Number(this.products[i].totalPrice);
    } else {
      this.selectedPrice -= Number(this.products[i].totalPrice);
      this.unselectedPrice += Number(this.products[i].totalPrice);
    }
  }

  addList() {
    if (!this.title || this.title.length <= 2) {
      alert('Please add a correct title!');
      return;
    }

    const newList: List = {
      "title": this.title,
      "id": this.idGenerator.getRandomNumberId(),
      "products": this.products,
      "totalPrice": this.totalPrice
    };

    this.listService.addList(newList).subscribe((list) => this.lists.push(list));

    this.title = '';
    this.totalPrice = 0;
    this.selectedPrice = 0;
    this.unselectedPrice = 0;
    this.products = [];
  }

  drop(event: CdkDragDrop<Product[]>){
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

}
