import {Component, OnInit} from '@angular/core';
import {List} from "../models/list";
import {ListService} from "../services/list.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  errorMessage = '';
  lists: List[] = [];
  faTimes = faTimes;

  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
    this.listService.getLists().subscribe((lists) => this.lists = lists);
    console.log(this.lists);
  }

  getListUsingTrackBy(index: number, list: List): number {
    return list.id;
  }

  onDelete(list: List) {
    this.listService
      .deleteList(list)
      .subscribe(() => (this.lists = this.lists.filter((l: List) => l.id !== list.id)))
  }

}
