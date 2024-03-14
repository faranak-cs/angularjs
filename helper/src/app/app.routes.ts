import { Routes } from '@angular/router';
import { Q1Component } from './q1/q1.component';
import { Q3Component } from './q3/q3.component';
import { Q2Component } from './q2/q2.component';
import { Q4Component } from './q4/q4.component';

export const routes: Routes = [
  { path: '', component: Q1Component, title: 'Q1' },
  { path: 'q2', component: Q2Component, title: 'Q2' },
  { path: 'q3', component: Q3Component, title: 'Q3' },
  { path: 'q4', component: Q4Component, title: 'Q4' },
];
