import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName:string="";
  response:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

search(){

  this.http.get('https://api.github.com/users/'+this.userName)
  .subscribe((response)=>{
    this.response=response;
    console.log(response);
  });
}

}
