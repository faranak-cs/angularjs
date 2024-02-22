import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent {
  displayPlayers: boolean = false;
  players = [
    { id: 101, name: 'Faran' },
    { id: 102, name: 'ABdullah' },
    { id: 103, name: 'Sharjeel' },
  ];

  // players: { id: number; name: string }[] = [];
}
