import { Component } from '@angular/core';
import { UserList } from '../Model/User.DataSource';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
users(){
  return UserList;
}
}
