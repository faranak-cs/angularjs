import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbaPlayersService } from '../nba-players.service';
import { Players } from '../players';
import { NbaPlayers } from '../nba-players';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nba-player',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './nba-player.component.html',
  styleUrl: './nba-player.component.css',
})
export class NbaPlayerComponent {
  id: number = 0;
  newPlayer: NbaPlayers = { ID: '0', NAME: 'Faran', TEAMCODE: 'PAK' };
  constructor(
    // get the id on clicking the route
    private route: ActivatedRoute,
    private playerService: NbaPlayersService
  ) {}

  ngOnInit() {
    // use snapshot of active route and get the id parameter from the route
    this.id = Number(this.route.snapshot.paramMap.get('playerID'));
    this.playerService.getNbaPlayer(this.id).subscribe((res) => {
      this.newPlayer = res;
      console.log(res);
    });
  }
}
