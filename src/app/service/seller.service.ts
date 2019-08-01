import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  _uploadimgProductsURL = "http://localhost:8090/seller/uploadimg";
  _addProductsURL = "http://localhost:8090/seller/productAdd";
  constructor(private http: HttpClient) { }

  uploadImg(_id,form) {
    let headers = new HttpHeaders({
      'ID': _id,
    });
    let options = { headers: headers };
    return this.http.post(this._uploadimgProductsURL, form, options);
  }
  addProduct(data) {
    return this.http.post(this._addProductsURL, data);
  }
}
