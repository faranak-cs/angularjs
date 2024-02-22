import { Component } from '@angular/core';
import { Players } from '../players';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {
  displayPlayers: boolean = false;
  players: Players[] = [
    { id: 101, name: 'Faran' },
    { id: 102, name: 'ABdullah' },
    { id: 103, name: 'Sharjeel' },
  ];

  // players: { id: number; name: string }[] = [];
}
