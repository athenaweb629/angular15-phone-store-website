import { Component } from '@angular/core';
import { Phone } from '../Model/Phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {

 
  phoneList:Phone[] | undefined;

  constructor(private phoneService:PhoneService){}

  ngOnInit():void{
    this.servistenGelenUrunler();

  }

   servistenGelenUrunler():void{
     this.phoneService.getPhoneList()
     .subscribe(phone=>{
        this.phoneList=phone;
     });
   }



   

}
