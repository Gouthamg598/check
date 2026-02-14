import { Component, ElementRef, ViewChild } from '@angular/core';
import { verificationModel } from '../Models/RegisterModel';
import { LoginService } from '../service/login-service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mail-verification',
  imports: [FormsModule, CommonModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './mail-verification.html',
  styleUrl: './mail-verification.css',
})

export class MailVerification {
  // mail: string = '';

  verification: verificationModel = new verificationModel()
  constructor(private varification: LoginService, private router: Router) { }

  onSubmit() {
    // this.mail = this.verification.email;
    this.verification.otp = this.verification.otp.toString();
    this.varification.verifyEmail(this.verification).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.success === true || data === true) {
          this.router.navigate(['login']);
        }
        else {
          this.verification.email = '';
          this.verification.otp = '';

        }
      },
      error: (err) => {

        this.verification.email = '';
        this.verification.otp = '';
      }
    })
  }

  onReset(form: NgForm) {
    form.resetForm();
  }

  sendOtp(mail: string) {
    this.varification.resendOtp(mail).subscribe({
      next: (data) => console.log(data.error),
      error: (err) => console.log(err.error.text)
    })

  }

}



