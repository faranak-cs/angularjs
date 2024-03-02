import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ClickedButtonComponent } from './clicked-button/clicked-button.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavouriteComponent } from './favourite/favourite.component';

// metadata of component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayersComponent,
    NbaPlayersComponent,
    MyButtonComponent,
    ClickedButtonComponent,
    EmployeeComponent,
    ContactFormComponent,
    FavouriteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // variables (data)
  title = 'hello-world';

  // methods (logic)
}
