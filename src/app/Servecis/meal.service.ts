import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  DB_URL = "http://localhost:3000/meals";

  constructor(private http: HttpClient) {}
  GetAllMeals(){
    return this.http.get(this.DB_URL);
  }
  GetMealByID(id:number){
    return this.http.get(this.DB_URL+"/"+id);
  }
  AddMeal(Meal:any){
    return this.http.post(this.DB_URL, Meal);
  }
  UpdateMeal(id:number,Meal:any){
    return this.http.put(this.DB_URL+"/"+id, Meal);
  }
  DeleteMeal(id:number){
    return this.http.delete(this.DB_URL+"/"+id);
  }
}
