import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ObservedValueTupleFromArray } from 'rxjs';
import { product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductService],

  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  


  @Input() category:number=0; 
  @Output() buyItemPrice = new EventEmitter<number[]>();
  svc:any;
  constructor() {
    this.svc=new ProductService;
    this.products=this.svc.getAllProducts();
 }
  products:product[];

  ngOnChanges() {

    this.products=this.svc.getProductByCategory(this.category);
 
  }  
setProductQuantity(count:number,p:product)
{
  if(count<0)
  {
    p.qty=0;
  }
}

 onBuy(p:product)
  {
    var totalPrice=0;
    var numberOfItems=0;
   if(p.availabelQty<p.qty)
   {
    totalPrice+=p.price*(p.availabelQty);
    numberOfItems+=(p.availabelQty)
    p.availabelQty-=(p.availabelQty);
   }
   
   else 
   {
   totalPrice+=p.price*p.qty;
   numberOfItems+=p.qty
   p.availabelQty-=p.qty;
   }
  


   this.buyItemPrice.emit([totalPrice,numberOfItems]);
 }



  ngOnInit(): void {}


}
