import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  // private url = 'https://localhost:7115/api';
  private url = "https://localhost:7291/api";

  constructor(public http: HttpClient) { }

  // getUsers(): Observable<any> {
  //   return this.http.get(`${this.url}/GetUsers`);
  // }
  registerUser(Registeruser: any): Observable<any> {
    console.log("UserRegister")
    console.log(Registeruser);
    return this.http.post(`${this.url}/Auth/register`, Registeruser);
  }

  login(user: any): Observable<any> {

    return this.http.post(`${this.url}/Auth/login`, user);
  }

  verifyEmail(verification: any): Observable<any> {

    return this.http.post(`${this.url}/Auth/verifyRegister`, verification);
  }

  resendOtp(email: string): Observable<any> {
    // console.log(email);
    return this.http.post(`${this.url}/Auth/resendOtp`, { email: email });
  }
}
