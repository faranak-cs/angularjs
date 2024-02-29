import { Component, inject } from '@angular/core';
import { NbaPlayers } from '../nba-players';
import { NbaPlayersService } from '../nba-players.service';

@Component({
  selector: 'app-nba-players',
  standalone: true,
  imports: [],
  templateUrl: './nba-players.component.html',
  styleUrl: './nba-players.component.css',
})
export class NbaPlayersComponent {
  nbaPlayers: NbaPlayers[] = [];

  nbaPlayerService = inject(NbaPlayersService);

  constructor() {
    this.nbaPlayerService.getNbaPlayers().subscribe((data) => {
      this.nbaPlayers = data;
    });
  }
}
