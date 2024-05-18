import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/Servecis/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {
  meals:any

  constructor(private MealService: MealService ,private route: ActivatedRoute,private _router: Router){
  }
  ngOnInit(): void {
    this.MealService.GetAllMeals().subscribe({
      next:(data)=>{
        this.meals=data
        // this._router.navigate(['/showMeals']) 
        console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    }) 
  }
  delete(id:any){
    console.log(id);
    this.MealService.DeleteMeal(id).subscribe({
      next:(data)=>{
        // this._router.navigate(['/showMeals']) 
        this.meals=this.meals.filter((item:any)  => item.id !==id )
        console.log(this.meals);
        
      },
      error:(err)=>{console.log(err)}
    }) 

  }
}
