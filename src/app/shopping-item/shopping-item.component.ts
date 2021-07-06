import { Component, OnInit } from '@angular/core';
import {List} from "../models/list";
import {ListService} from "../services/list.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  pageTitle = "Shopping lists"
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
