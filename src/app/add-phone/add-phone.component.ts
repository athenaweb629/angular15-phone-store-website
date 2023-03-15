import { Component } from '@angular/core';
import { Phone } from '../Model/Phone';
import { PhoneList } from '../Model/Phone.DataSource';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent {
  Id:any=PhoneList.length;
addPhone(brand:any,name:any,price:any,stok:any,descript:any,file:any){
  console.log(file);
  
  PhoneList.push(new Phone(this.Id+1,brand,price,stok,descript));
}
}
