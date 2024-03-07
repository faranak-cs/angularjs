import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'players', component: NbaPlayersComponent, title: 'Players Page' },
  { path: 'contact', component: ContactFormComponent, title: 'Contact Page' },
];
