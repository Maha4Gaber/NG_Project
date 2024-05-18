import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginService } from '../../services/loginService';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[
    loginService
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addForm: FormGroup;

  constructor(private loginService: LoginComponent, private router: Router) {
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

  addCustomer() {
    if (this.addForm.invalid) {
      return;
    }

    const customerData: loginService = {
      name: this.addForm.get('name')?.value,
      age: this.addForm.get('age')?.value,
      email: this.addForm.get('email')?.value,
      phone: this.addForm.get('phone')?.value
    };

    this.loginService.addCustomer (LoginComponent).subscribe({
      next: () => {
        console.log('Student added successfully');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('Error adding student:', err);
      }
    });
  }

}
