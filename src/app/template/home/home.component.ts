import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  switch:boolean=true;

change()
{
  this.switch=!this.switch;
}
  ngOnInit(): void {
  }

}
