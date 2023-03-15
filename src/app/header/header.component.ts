import { Component } from '@angular/core';
import { CartList } from '../Model/Cart.DataSource';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  CartLength(){
    return CartList.filter(x=>x.Status==true).length;
  }
}
