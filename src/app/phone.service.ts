import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';


import { Phone } from './Model/Phone';
import { PhoneList } from './Model/Phone.DataSource';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  getPhoneList():Observable<Phone[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(PhoneList.filter(x=>x.Stock>0));
  }

  getSinglePhone(id:number):Observable<Phone | undefined>{
    return of(PhoneList.find(deger=>deger.Id===id));
  }
}






