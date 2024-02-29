import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';
import { MyButtonComponent } from './my-button/my-button.component';

// metadata of component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayersComponent,
    NbaPlayersComponent,
    MyButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // variables (data)
  title = 'hello-world';

  // methods (logic)
}
