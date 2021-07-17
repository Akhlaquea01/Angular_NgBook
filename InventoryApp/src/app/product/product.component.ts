import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [
       new Product(
       'MYSHOES',
       'Black Running Shoes',
       'https://cdn.vox-cdn.com/thumbor/w4IhTY14zlZCl6phV9qLx52Jbsk=/0x0:2040x1360/400x400/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22248904/vpavic_210119_4377_0157.jpg',
       ['Men', 'Shoes', 'Running Shoes'],
       109.99),
       new Product(
       'NEATOJACKET',
       'Blue Jacket',
       'https://cdn.vox-cdn.com/thumbor/9TYx3YpjK-_4L9YuLq80QfH0Hqw=/0x0:2040x1360/920x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21973509/vpavic_4243_20201017_0144.0.jpg',
       ['Women', 'Apparel', 'Jackets & Vests'],
       238.99),
       new Product(
       'NICEHAT',
       'A Nice Black Hat',
       'https://cdn.vox-cdn.com/thumbor/iWRmJPlEf8AEYDDYFZSaKLz83Yw=/0x0:2040x1360/920x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22248903/vpavic_210119_4377_0153.jpg',
       ['Men', 'Accessories', 'Hats'],
       29.99)
       ];

   }

  ngOnInit(): void {
  }

  productWasSelected(product: Product): void {
     console.log('Product clicked: ', product);
     }

}
