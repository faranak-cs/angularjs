import { Injectable } from '@angular/core';
import { Players } from './players';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  // static data
  players: Players[] = [
    { id: 101, name: 'Faran' },
    { id: 102, name: 'ABdullah' },
    { id: 103, name: 'Sharjeel' },
  ];

  constructor() {}

  getPlayers(): Players[] {
    return this.players;
  }

  // get data from REST API
}
