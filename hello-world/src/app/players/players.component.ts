import { Component, inject } from '@angular/core';
import { Players } from '../players';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {
  displayPlayers: boolean = true;

  // empty players array
  players: Players[] = [];

  // inject the service into component
  playerService = inject(PlayersService);

  // constructor to load data from injected service
  constructor() {
    this.players = this.playerService.getPlayers();
  }
}
