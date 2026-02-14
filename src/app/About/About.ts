import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-About',
  imports: [RouterModule],
  templateUrl: './About.html',
  styleUrl: './About.css',
})
export class About {

  ngOnInit() {
    console.log('intropage');
  }

}
