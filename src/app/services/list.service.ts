import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {List} from "../models/list";
import {Product} from "../models/product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class ListService {

  private apiUrl = 'http://localhost:5001/lists'

  constructor(private http: HttpClient) {
  }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.apiUrl)
  }

  deleteList(list: List): Observable<Product> {
    const url = `${this.apiUrl}/${list.id}`;
    return this.http.delete<Product>(url);
  }

  addList(list: List): Observable<List> {
    return this.http.post<List>(this.apiUrl, list, httpOptions);
  }
}
