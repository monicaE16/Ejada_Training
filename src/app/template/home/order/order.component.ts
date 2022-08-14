import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/model/category.model';
import { product } from 'src/app/model/product.model';
import { CategoryService } from 'src/app/services/category/category-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(svc:CategoryService) 
  {
     this.categories=svc.getCategories();
  }
  totalPrice:number=0;
  numberOfItems:number=0;
  categoryId:number=0;
  categories:category[];

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
