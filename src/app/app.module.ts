import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneComponent } from './phone/phone.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhonesComponent,
    PhoneComponent,
    FooterComponent,
    DetailComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    OrderdetailComponent,
    AddPhoneComponent,
    OrdersuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
