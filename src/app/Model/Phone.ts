export class Phone{
    Id:number | undefined;
    Brand:string |undefined;
    Model:string | undefined;
    Price:any | undefined;
    Stock:number ;
    Image:string | undefined;
    Description:string | undefined;
    IsStatus:boolean | undefined;
    OperatingSys:string | undefined;
    Memory:number | undefined;

    constructor(Id:any,brand:any,price:any,stok:number,desc:any) {
       this.Id=Id;
       this.Brand=brand;
       this.Price=price;
       this.Stock=stok;
       this.Description=desc;
       this.Image="GM.png";
    }
}