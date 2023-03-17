import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderList } from '../Model/Order.DataSource';
import { User } from '../Model/User';
import { Cart } from '../Model/Cart';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit  {
 @Input() user:User| undefined;
 
userList:User[] | undefined;
carList:Cart[] | undefined;
index:any;
Swal = Swal;
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
  cancelOrder(id:any){
    this.index=OrderList.findIndex(x=>x.Id==id);
    
    this.Swal.fire({
      title: 'Bu Siparişi İptal Etmek İstediginize Emin Misiniz ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet, iptal et',
      cancelButtonText: 'Hayır, iptal etme'
    }).then((result) => {
      if (result.value) {
        OrderList[this.index].CartList.forEach((item)=>{
          item.Phone.Stock-= -item.Quantity;
        })
        OrderList.splice(this.index,1);
        this.Swal.fire(
          'Başarılı',
          'Sipariş İptal Edildi!',
          'success'
        );
      } else if (result.dismiss === this.Swal.DismissReason.cancel) {
        this.Swal.fire(
          'İşlem Gerçekleştirilmedi',
          'Sipariş iptal edilmedi.',
          'info'
        );
      }
  });
    }
  }

