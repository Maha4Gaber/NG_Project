import { Component } from '@angular/core';
import { MealService } from 'src/app/Servecis/meal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 meals:any

  constructor(private MealService: MealService ){
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


}
