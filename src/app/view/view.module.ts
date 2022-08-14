import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Comp1Component
  ],
  exports:[
    Comp1Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ViewModule { 

}
