import { ThisReceiver } from '@angular/compiler';
import { Component, IterableDiffers } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../Model/Cart';
import { CartList } from '../Model/Cart.DataSource';
import { Order } from '../Model/Order';
import { OrderList } from '../Model/Order.DataSource';
import { User } from '../Model/User';
import { UserList } from '../Model/User.DataSource';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  Swal = Swal;
  index: any;
  orderid: any = 0;
  totalPrice: any = 0;
  length: any = CartList.length;
  user: User | any;
  order: Order | any;
  list: Order[] | any;
  control: boolean = true;
  constructor(private cartService: CartService,private router: Router) {
    this.totalPrice=0;
    CartList.filter(x => x.Status == true).forEach((item) => {
      this.totalPrice += item.TotalPrice;
    })

  }
  confirmOrder(userid: any | undefined) {
    this.control=true;
    this.list = CartList;

    this.user = UserList.find(x => x.FullName == userid)
  
    
    CartList.filter(x => x.Status == true).forEach((item) => {
      item.Phone.Stock -= item.Quantity;
      if (item.Phone.Stock < 0) {
        this.control = false;
      } 
    }
   )
    
    if (this.control == true) {
      if(CartList.filter(x=>x.Status==true).length>0){
      this.order = new Order(this.user, this.list, this.totalPrice);
      this.totalPrice = 0;
      OrderList.push(this.order)
      CartList.forEach((item) => {
        item.Status = false;
      })
      this.router.navigate(['/ordersuccess']);
      Swal.fire("Sipariş Onaylandı!", "Satın alım başarıyla gerçekleşti!", "success");
    }
    else{
      Swal.fire("Sipariş Onaylanmadı!", "Sepette herhangi bir ürün bulunmuyor!", "error");
    }
    }
    else{
      CartList.filter(x => x.Status == true).forEach((item) => {
        item.Phone.Stock -= -item.Quantity;
        if (item.Phone.Stock < 0) {
        
          this.control = false;
        } 
      })
      Swal.fire("Sipariş Onaylanmadı!", "Bu ürün veya ürünlerin stoğu yeteri kadar mevcut değil sepet onaylanamadı!", "error");
    }
  }
  plusPhone(id:any){
    CartList.filter(x=>x.Status==true).forEach((item)=>{
      if(item.Id==id){
        if(item.Phone.Stock>item.Quantity){
          item.Quantity++;
          item.TotalPrice+=item.Phone.Price;
          this.totalPrice+=item.Phone.Price;
        }
      }
    })

  }
  minusPhone(id:any){
   
    CartList.filter(x=>x.Status==true).forEach((item)=>{
      if(item.Id==id){
        if(item.Quantity>=2){
          item.Quantity--;
          item.TotalPrice -= item.Phone.Price;
          this.totalPrice-=item.Phone.Price;
        }
      }
    })

  }
  removeCart(id: any) {
    this.Swal.fire({
      title: 'Bu Ürünü Sepetten Çıkarmak İstediğinize Emin misiniz ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet, çıkar',
      cancelButtonText: 'Hayır, iptal et'
    }).then((result) => {
      if (result.value) {
        this.totalPrice = 0;
        CartList[id].Status = false;
        CartList.filter(x => x.Status == true).forEach((item) => {
          this.totalPrice += item.TotalPrice;
        });
        this.Swal.fire(
          'Başarılı',
          'Ürün sepetinizden çıkarıldı!',
          'success'
        );
      } else if (result.dismiss === this.Swal.DismissReason.cancel) {
        this.Swal.fire(
          'İptal edildi',
          'Ürün sepetinizden çıkarma işlemi iptal edildi.',
          'error'
        );
      }
    });
  }
  cancelOrder() {
    if(CartList.filter(x=>x.Status==true).length>0){
    this.Swal.fire({
      title: 'Sepeti temizlemek istediginizden emin misiniz ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet, temizle',
      cancelButtonText: 'Hayır, iptal et'
    }).then((result) => {
      if (result.value) {
        this.totalPrice = 0;
        CartList.filter(x => x.Status == true).forEach((item) => {
          item.Status = false;
        });
        this.Swal.fire(
          'Başarılı',
          'Sepetiniz temizlendi!',
          'success'
        );
      } else if (result.dismiss === this.Swal.DismissReason.cancel) {
        this.Swal.fire(
          'İptal edildi',
          'Sepet temizleme işlemi iptal edildi.',
          'error'
        );
      }
    });
  }
  else{
    Swal.fire("Sepet iptal edilemedi!", "Sepetinizde herhangi bir ürün bulunmuyor!", "error");
  }
}

  getCartList() {

    return CartList.filter(x => x.Status == true);
  }
  getUserList() {
    return UserList;
  }
  
}
