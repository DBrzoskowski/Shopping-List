import {Product} from "./product";

export interface List {
  title: string,
  id: number,
  products: Product[],
  totalPrice: number
}
