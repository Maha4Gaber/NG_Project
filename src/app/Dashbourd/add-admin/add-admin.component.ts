import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Servecis/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  name=''
  password=''
  email=''
  constructor(private UserService: UserService ,private route: ActivatedRoute,private _router: Router){
  }
  Add(){
    let user={name:this.name,email:this.email,password:this.password,role:'admin'}
    console.log(user);
    this.UserService.AddUser(user).subscribe({
      next:(data)=>{
        
        this._router.navigate(['/showusers']) 
        console.log(data);
        
      },
      error:(err)=>{console.log(err)}
    })
    console.log(this.name);
    console.log(this.password);
    
  }
}
