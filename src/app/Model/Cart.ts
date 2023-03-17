import { Phone } from "./Phone";
export let cartId:number=0
export class Cart{
    Id:number | any;
    Phone: Phone;
    Quantity:number ;
    TotalPrice:Number;
    Status:Boolean=true

    constructor(quantity:number,phone:any){
        this.TotalPrice=0;
        this.Id=cartId++,
        this.Phone=phone,
        this.Quantity=quantity
        this.TotalPrice=this.Phone.Price*this.Quantity;
    }
}
