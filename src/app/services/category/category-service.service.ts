import { Injectable } from '@angular/core';
import { category } from 'src/app/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:category[];
    constructor() {

      //will be replaced by an api call to get the categories from database
    this.categories=[
      {name:'Mobiles',id:1},
      {name:'Laptops',id:2},
      {name:'Tv',id:3},
    ];

}


getCategories()
{
  return this.categories;
}



  }
