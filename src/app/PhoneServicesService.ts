import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import { Phone } from './Model/Phone';
import { PhoneList } from './Model/Phone.DataSource';

@Injectable({
  providedIn: 'root'
})
export class PhoneServicesService {

  constructor() { }

  getPhoneList():Observable<Phone[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(PhoneList);
  }

  getSinglePhone(id:number):Observable<Phone | undefined>{
    return of(PhoneList.find(deger=>deger.Id===id));
  }


}
