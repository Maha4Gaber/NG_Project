import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/Servecis/meal.service';
import { OrderService } from 'src/app/Servecis/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders:any
  mealname=''
  constructor(private OrderService: OrderService,private MealService: MealService  ,private route: ActivatedRoute,private _router: Router){
  }
  ngOnInit(): void {
    this.OrderService.GetAllOrders().subscribe({
      next:(data)=>{
        this.orders=data
        // this._router.navigate(['/showOrders']) 
        console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    }) 
  }
  delete(id:any){
    console.log(id);
    this.OrderService.DeleteOrder(id).subscribe({
      next:(data)=>{
        // this._router.navigate(['/showOrders']) 
        this.orders=this.orders.filter((item:any)  => item.id !==id )
        console.log(this.orders);
        
      },
      error:(err)=>{console.log(err)}
    }) 

  }
}
