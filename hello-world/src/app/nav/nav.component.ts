import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NbaPlayersComponent } from '../nba-players/nba-players.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
