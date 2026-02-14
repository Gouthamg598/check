import { Component } from '@angular/core';
import { RegisterModel } from '../Models/RegisterModel';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../service/login-service';
import { loginModel } from '../Models/loginModel';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  register: RegisterModel = new RegisterModel();
  confirmPassword: string = '';
  passwordMismatch = false;


  constructor(public user: LoginService, private router: Router) { }

  ngOnInit() {

  }

  checkpws() {
    this.passwordMismatch =
      this.register.password !== this.confirmPassword
  }
  onSubmit(form: any) {
    if (form.invalid || this.passwordMismatch) {
      return;
    }

    if (this.confirmPassword === this.register.password && this.register.password != "") {
      console.log(this.register);
      this.register.phone = this.register.phone.toString();
      this.register.address.zipCode = this.register.address.zipCode.toString();
      this.user.registerUser(this.register).subscribe({
        next: (data) => {
          console.log(data);
          if (data.success === true || data === true) {
            this.router.navigate(['verification']);
          }
          else {
            alert("User already exists");
          }
        },
        error: (err) => {
          //console.error('Full error:', err.message);
          console.log("Enter valid Details");
        }

      });
      this.register = new RegisterModel();


    }
    else {
      alert("Password doesn't match");
    }
  }

  onReset(form: NgForm) {
    form.resetForm();
  }

}
