import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from './template/home/home.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { OrderComponent } from './template/home/order/order.component';
import { ProductListComponent } from './template/home/order/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    OrderComponent,
    ProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
