import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Servecis/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any
  constructor(private UserService: UserService ,private route: ActivatedRoute,private _router: Router){
  }
  ngOnInit(): void {
    this.UserService.GetAllUsers().subscribe({
      next:(data)=>{
        this.users=data
        // this._router.navigate(['/showusers']) 
        // console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    }) 
  }
  delete(id:any){
    console.log(id);
    this.UserService.DeleteUser(id).subscribe({
      next:(data)=>{
        // this._router.navigate(['/showusers']) 
        this.users=this.users.filter((item:any)  => item.id !==id )
        // console.log(this.users);
        
      },
      error:(err)=>{console.log(err)}
    }) 

  }
}
