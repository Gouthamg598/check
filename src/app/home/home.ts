import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  email!: string;
  name!: string;
  userId!: number;

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.email = user['token'].email;
    this.name = user['token'].name;
    this.userId = user['token'].userId;
  }


}
