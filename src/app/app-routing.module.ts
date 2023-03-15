import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { PhonesComponent } from './phones/phones.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"home",component:PhonesComponent},
  {path:"phones",component:PhonesComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:"contact",component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"users",component:UserComponent},
  {path:"addPhone",component:AddPhoneComponent},
  {path:"orderdetail/:id",component:OrderdetailComponent},
  {path:"ordersuccess",component:OrdersuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
