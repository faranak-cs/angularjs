import { Component, inject } from '@angular/core';
import { NbaPlayers } from '../nba-players';
import { NbaPlayersService } from '../nba-players.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nba-players',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './nba-players.component.html',
  styleUrl: './nba-players.component.css',
})
export class NbaPlayersComponent {
  nbaPlayers: NbaPlayers[] = [];
  newPlayer: NbaPlayers = { ID: '0', TEAMCODE: 'PAK', NAME: 'Faran' };

  nbaPlayerService = inject(NbaPlayersService);

  constructor() {
    this.nbaPlayerService.getNbaPlayers().subscribe((data) => {
      console.log(data);
      this.nbaPlayers = data;
    });
  }
  onClick() {
    this.nbaPlayerService.addNbaPlayer(this.newPlayer).subscribe((response) => {
      console.log(response);
    });
  }
}
