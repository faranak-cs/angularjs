import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ClickedButtonComponent } from './clicked-button/clicked-button.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

// decorator with component meta-data
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayersComponent,
    NbaPlayersComponent,
    MyButtonComponent,
    ClickedButtonComponent,
    EmployeeComponent,
    ContactFormComponent,
    FavouriteComponent,
    NavComponent,
    HomeComponent,

    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // variables (data)
  title = 'hello-world';

  // methods (logic)
}
