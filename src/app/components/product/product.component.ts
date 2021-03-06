import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('Nike Off-White Sneakers', 'NKE', 200);
  }

  toggleOnSale(event) {
    console.log('changing onSale state', event);
    this.product.onSale = !this.product.onSale;
  }
}
