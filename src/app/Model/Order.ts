import { Cart } from "./Cart";
import { User } from "./User";

export let orderId:number=0;
export class Order{
    Id:Number | any;
    User:User|undefined;
    CartList:Cart[];
    TotalPrice:number | any;

    constructor(user:User,CartList:Cart[],TotalPrice:Number){
        this.Id = orderId++;
        this.User = user;
        this.CartList = CartList.filter(x=>x.Status==true);
        
        this.TotalPrice = TotalPrice;

    }
    
}