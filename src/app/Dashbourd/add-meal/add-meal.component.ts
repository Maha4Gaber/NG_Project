import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/Servecis/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  name=''
  price=''
  img=''
  desc=''
  constructor(private UserService: MealService ,private route: ActivatedRoute,private _router: Router){}
    Add(){
    let meal ={name:this.name,price:this.price+'$',img:this.img,text:this.desc}
    console.log(meal);
    this.UserService.AddMeal(meal).subscribe({
      next:(data)=>{
        this._router.navigate(['/showmeal']) 
        console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    }) 
    
  }
}
