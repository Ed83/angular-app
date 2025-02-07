import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

}
