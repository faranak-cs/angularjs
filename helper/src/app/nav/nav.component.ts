import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Q1Component } from '../q1/q1.component';
import { Q2Component } from '../q2/q2.component';
import { Q3Component } from '../q3/q3.component';
import { Q4Component } from '../q4/q4.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
