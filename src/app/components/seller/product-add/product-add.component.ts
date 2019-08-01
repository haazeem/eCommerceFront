import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SellerService } from 'src/app/service/seller.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  fileToUpload: File = null;
  constructor(private form: FormBuilder, private us: SellerService) {
    this.productAddForm = this.form.group({
      ProductName: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      productDescription: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      productPrice: new FormControl("", [
        Validators.required
      ]),
      productQuantity: new FormControl("", [
        Validators.required
      ])
    })
  }

  ngOnInit() {
  }

  get productName() { return this.productAddForm.get('ProductName') }
  get productDescription() { return this.productAddForm.get('productDescription') }
  get productQuantity() { return this.productAddForm.get('productQuantity') }
  get productPrice() { return this.productAddForm.get('productPrice') }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  convertFile() {
    let form = new FormData();
    form.append("productImg", this.fileToUpload, this.fileToUpload.name);
    let data = new Product(this.productAddForm.value.ProductName, this.productAddForm.value.productDescription, this.productAddForm.value.productPrice, this.productAddForm.value.productQuantity, "qsdqsd")
    this.us.addProduct(data).subscribe((res) => {
      console.log(res);
      this.us.uploadImg(res,form).subscribe((result) => {

      }, (error) => {

      })

    }, (err) => {

    });


  }



}
