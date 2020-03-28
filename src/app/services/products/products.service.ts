import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public url = 'http://localhost:3000';
  public selectedProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  constructor( public http: HttpClient) { }

  public getAllProducts() {
    return this.http.get(`${this.url}/products`) as Observable<any>;
  }

  public addNewProduct(product) {
    console.log(product);
    return this.http.post(`${this.url}/products`, product) as Observable<any>;
  }

  public editProduct(product, productId) {
    return this.http.put(`${this.url}/products/${productId}`, product) as Observable<any>;
  }

  public deleteProduct(productId) {
    return this.http.delete(`${this.url}/products/${productId}`) as Observable<any>;
  }
}
