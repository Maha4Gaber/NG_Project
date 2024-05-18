import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  DB_URL = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}
  GetAllUsers(){
    return this.http.get(this.DB_URL);
  }
  GetUserByID(id:number){
    return this.http.get(this.DB_URL+"/"+id);
  }
  AddUser(User:any){
    return this.http.post(this.DB_URL, User);
  }
  UpdateUser(id:number,User:any){
    return this.http.put(this.DB_URL+"/"+id, User);
  }
  DeleteUser(id:number){
    return this.http.delete(this.DB_URL+"/"+id);
  }
}
