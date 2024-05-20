
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Servecis/user.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addForm: FormGroup;

  constructor(private UserService: UserService, private router: Router) {
    this.addForm = new FormGroup({
      name: new FormControl("", Validators.required),
      age: new FormControl("", [Validators.required, Validators.min(18), Validators.max(30)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required])
    });
  }
  get AgeValid(){
    let age = this.addForm.controls["age"] ;
    return age!=undefined && age.valid ; 
  }
  get nameValid(){
    return this.addForm.controls["name"].valid ; 
  }
  get emailValid(){
    return this.addForm.controls["email"].valid ; 
  }
  get phoneValid(){
    return this.addForm.controls["phone"].valid ; 
  }
  users:any

  addUser() {
    if (this.addForm.invalid) {
      return;
    }

    if (this.addForm.invalid) {
      return;
    }
    this.addForm.value.role='user'
    let user=this.addForm.value
    this.UserService.GetAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users=data
        // console.log(user.email);
        let myuser=this.users.filter((item:any)  => item.email==user.email)
        // console.log(myuser);
        

        localStorage.setItem('userId',myuser[0].id)
        localStorage.setItem('userrole',myuser[0].role)
        localStorage.setItem('user','true')


        this.router.navigate(['/']);
      },
     
    });
  }
  

}

