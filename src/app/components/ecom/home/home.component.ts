import { Component, OnInit } from '@angular/core';
import { EcomService } from 'src/app/service/ecom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];
  imgs = [];
  constructor(private ecoms: EcomService) { }

  ngOnInit() {
    this.ecoms.getProducts().subscribe((res) => {
      for (let i in res) {
        this.data.push(res[i]);
        this.imgs.push("http://localhost:8090/seller/streamImg?file=" + res[i].ProductImg);
      }
    }, (err) => {
      console.log(err);
    })
  }

  addtoshopcart(data) {
    console.log(data);
    this.ecoms.createorgetCart(data).subscribe((res) => {
      if (!!localStorage.getItem('cardID')==false) {
        localStorage.setItem('cardID', res + "");
      }
    }, (err) => {

    });
  }

}
