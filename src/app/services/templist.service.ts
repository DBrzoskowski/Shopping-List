import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TempListService {

  private subject = new Subject<any>();

  sendProduct(product: Product) {
    this.subject.next(product);
  }

  clearProduct() {
    this.subject.next();
  }

  onProduct(): Observable<any> {
    return this.subject.asObservable();
  }
}
