import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/Servecis/meal.service';
import { OrderService } from 'src/app/Servecis/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  meal:any
  constructor(private MealService: MealService,private OrderService: OrderService ,private route: ActivatedRoute,private _router: Router){
  }
  ngOnInit(): void {
    if(localStorage.getItem('userId')==''){
      
      this._router.navigate(['/login']) 
    }
    const mealId = this.route.snapshot.paramMap.get('id');

    this.MealService.GetMealByID(mealId).subscribe({
      next:(data)=>{
        this.meal=data
        console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    }) 
  }

}
