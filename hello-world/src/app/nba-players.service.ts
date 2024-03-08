import { Injectable } from '@angular/core';
import { NbaPlayers } from './nba-players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NbaPlayersService {
  // URL OF JSON / REST API SERVER
  url: string = `assets/NBAPlayers.json`;

  // INJECT HTTP CLIENT IN CONSTRUCTOR
  constructor(private http: HttpClient) {}

  // GET NBA PLAYERS
  getNbaPlayers(): Observable<NbaPlayers[]> {
    return this.http.get<NbaPlayers[]>(this.url);
  }
  // ADD NEW PLAYER
  addNbaPlayer(nbaPlayer: NbaPlayers) {
    return this.http.post<NbaPlayers>(this.url, nbaPlayer);
  }
  // GET NBA PLAYER
  getNbaPlayer(id: number): Observable<NbaPlayers> {
    return this.http.get<NbaPlayers>(`${this.url}${id}`);
  }
}
