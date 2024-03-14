import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Q2Component } from './q2/q2.component';
import { Q1Component } from './q1/q1.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    NavComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'helper';
}
