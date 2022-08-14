import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/model/category.model';
import { product } from 'src/app/model/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }
  totalPrice:number=0;
  numberOfItems:number=0;
  categoryId:number=0;
  allProducts:product[]=[
    { 
      id:1,
      name:'Iphone 12',
      image:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
      price:20000,
      availabelQty:30,
      qty:0,
      categoryId:1},
      {
        id:2,
        name:'Iphone 13',
        image:'data:image/jpeg;base64,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',
        price:30000,
        availabelQty:10,
        qty:0,
        categoryId:1

      },{
        id:3,
        name:'Macbook',
        image:'https://techtechnology.net/wp-content/uploads/2021/01/%D8%A2%D8%A8%D9%84-%D8%AA%D8%B7%D9%88%D8%B1-MacBook-Air-%D8%AC%D8%AF%D9%8A%D8%AF-%D9%85%D8%B9-%D8%B4%D8%AD%D9%86-MagSafe-2.jpg',
        price:50000,
        availabelQty:30,
        qty:0,
        categoryId:2

      },{
        id:4,
      name:'Dell',
      image:'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=555&qlt=100,0&resMode=sharp2&size=555,402',
      price:20000,
      availabelQty:30,
      qty:0,
      categoryId:2
      },
    {
      id:5,
      name:'samsung Tv',
      image:'https://images.samsung.com/is/image/samsung/levant-uhd-tu8500-ua55tu8500uxtw-rperspectiveblack-229855903?$720_576_PNG$',
      price:20000,
      availabelQty:30,
      qty:0,
      categoryId:3
    }];

  products:product[]=this.allProducts;


  categories:category[]=[
  {name:'Mobiles',id:1},
  {name:'Laptops',id:2},
  {name:'Tv',id:3},
];

setPriceAndCount(price:number[])
{
this.totalPrice+=price[0];
this.numberOfItems+=price[1];
}
 
 setCategory(id:number)
 {

  this.categoryId=id

 }
  ngOnInit(): void {}


}
