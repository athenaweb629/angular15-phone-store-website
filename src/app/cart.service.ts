import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from './Model/Cart';
import { CartList } from './Model/Cart.DataSource';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartList():Observable<Cart[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(CartList);
  }

  getSinglePhone(id:number):Observable<Cart | undefined>{
    return of(CartList.find(deger=>deger.Id===id));
  }
}
