import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { NbaPlayersComponent } from './nba-players/nba-players.component';

// metadata of component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, NbaPlayersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // variables (data)
  title = 'hello-world';

  // methods (logic)
}
