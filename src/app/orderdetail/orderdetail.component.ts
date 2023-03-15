import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderList } from '../Model/Order.DataSource';
import { User } from '../Model/User';
import { Cart } from '../Model/Cart';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit  {
 @Input() user:User| undefined;
 
userList:User[] | undefined;
carList:Cart[] | undefined;

 constructor(
  private userservices:UserService,
  
  private userService:UserService,
  private route:ActivatedRoute,private productService:UserService){
    
  }

  ngOnInit(): void {
    this.getUser();

    this.servistenGelenUrunler();

    console.log(OrderList.filter(x=>x.User?.Id==this.user?.Id));
  }
  servistenGelenUrunler():void{
    this.userService.getUserList()
    .subscribe(phone=>{
       this.userList=phone;
    });
  }
  getUser(){

    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getSinglePhone(Number(id))
    .subscribe(urun=>this.user=urun)
  }
  getOrders(){
    return OrderList.filter(x=>x.User?.Id==this.user?.Id)
  }
  getCarts(id:any){
    return OrderList.filter(x=>x.User?.Id==this.user?.Id)[id].CartList
  }
}
