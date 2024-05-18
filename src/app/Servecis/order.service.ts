import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  DB_URL = "http://localhost:3000/orders";

  constructor(private http: HttpClient) {}
  GetAllOrders(){
    return this.http.get(this.DB_URL);
  }
  GetOrderByID(id:number){
    return this.http.get(this.DB_URL+"/"+id);
  }
  AddOrder(Order:any){
    return this.http.post(this.DB_URL, Order);
  }
  UpdateOrder(id:number,Order:any){
    return this.http.put(this.DB_URL+"/"+id, Order);
  }
  DeleteOrder(id:number){
    return this.http.delete(this.DB_URL+"/"+id);
  }
}
