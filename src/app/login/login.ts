import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../service/login-service';
import { loginModel } from '../Models/loginModel';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpContext } from '@angular/common/http';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private users: LoginService, private router: Router) { }
  login: loginModel = new loginModel();
  errorMessage = '';
  onSubmit() {

    if (!this.login.email || !this.login.password || this.login.email == " " || this.login.password.length < 6) {
      alert("Please enter email and password");
      return;
    }
    else {
      this.users.login(this.login).subscribe({
        next: (data) => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['Home']);
        },
        error: (error) => {

          this.errorMessage = error.error?.message || 'Invalid login';

        }
      })
    }
  }
  onReset(form: any) {
    form.reset();
  }


  // login(username: string, password: string) {
  //   // for (let i in this.users.usersInfo) {
  //   //   if (this.users.usersInfo[i].email == username && this.users.usersInfo[i].password == password) {
  //   //     alert('Login Success');
  //   //     this.isUserValid = true;
  //   //     break;
  //   //   }
  //   // }

  //   const user = this.users.usersInfo.find(
  //     (u: any) => u.email === username && u.password === password
  //   );

  //   if (user) {
  //     this.message = 'Login Success'
  //   } else {
  //     this.message = 'Login Failed'
  //   }
  //   setTimeout(() => {
  //     this.username = '';
  //     this.password = '';
  //     this.message = '';
  //   }, 200);
  // }
}
