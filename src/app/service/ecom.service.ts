import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EcomService {
  _getProductsURL = "http://localhost:8090/product/productListe";
  _addProductToShoppingCart = "http://localhost:8090/shoppingcart/addtoShoppingCart";
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.post<any>(this._getProductsURL, null);
  }
  createorgetCart(data) {
    let id = (!!localStorage.getItem('cardID')) ? localStorage.getItem('cardID') : "undefined";
    let headers = new HttpHeaders({
      'id': id,

    });
    let options = { headers: headers };
    return this.http.post(this._addProductToShoppingCart, data, options);
  }
}
