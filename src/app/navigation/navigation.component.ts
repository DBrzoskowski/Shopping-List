import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navTitle: string = "Shopping List";
  navHome: string = "Home";
  navProductList: string = "Product List";
  navProductPool: string = "Product Pool";

  constructor() { }

  ngOnInit(): void {
  }

}
