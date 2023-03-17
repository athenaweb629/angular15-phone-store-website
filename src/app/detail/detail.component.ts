import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../Model/Cart';
import { CartList } from '../Model/Cart.DataSource';
import { Phone } from '../Model/Phone';
import { PhoneService } from '../phone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() phone: Phone | undefined;
  basketNumber = 1;
  status: any = true;
  phoneList: Phone[] | undefined;
  Swal = Swal;


  constructor(

    private phoneServices: PhoneService,

    private phoneService: PhoneService,
    private route: ActivatedRoute, private productService: PhoneService) {

  }

  ngOnInit(): void {
    this.getPhone();

    this.servistenGelenUrunler();


  }


  servistenGelenUrunler(): void {
    this.phoneService.getPhoneList()
      .subscribe(phone => {
        this.phoneList = phone;
      });
  }
  getPhone() {

    const id = this.route.snapshot.paramMap.get('id');
    this.phoneServices.getSinglePhone(Number(id))
      .subscribe(urun => this.phone = urun)
  }

  minusPhone() {
    this.basketNumber--;
    if (this.basketNumber <= 1) this.basketNumber = 1
  }
  plusPhone(number: any) {
    this.basketNumber++;
    if (number <= this.basketNumber) this.basketNumber = number

  }

  BasketPhone: Phone | undefined;

  addBasket(phoneid: any, quantity: any) {
    this.status = true;
    this.BasketPhone = this.phoneList?.find(basketphone => basketphone.Id === phoneid)
    CartList.filter(x => x.Status == true).forEach((item) => {
      if (item.Phone.Id == this.BasketPhone?.Id) this.status = false;
    })
    if (this.status) {
      const basket = new Cart(quantity, this.BasketPhone);

      CartList.push(basket);
      this.basketNumber = 1;
      Swal.fire("Ürün Sepete Eklendi!", "Ürün Başarıyla Sepete Eklendi!", "success");
    }
    else {
      CartList.filter(x => x.Status == true).forEach((item) => {
        console.log(item.Quantity + " " + quantity + " " + item.Phone.Stock);

        if (item.Phone.Id == this.BasketPhone?.Id) {     
          if (Number(item.Quantity) + Number(quantity) <= Number(item.Phone.Stock)) {
            item.Quantity -= -quantity;
            this.basketNumber = 1;
            Swal.fire("Ürün Adedi Arttırıldı!", "Ürün Adedi Başarıyla Arttırıldı!", "success");
          }
          else {
            Swal.fire("Ürün Adedi Arttırılmadı!", "Ürün Stoğu Yetersiz!", "error");
          }
        }
      })
    }


  }




}
