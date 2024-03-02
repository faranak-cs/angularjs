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

  // GET DATA FROM JSON FILE
  getNbaPlayers(): Observable<NbaPlayers[]> {
    return this.http.get<NbaPlayers[]>(this.url);
  }
  // POST DATA INTO JSON FILE
  addNbaPlayer(nbaPlayer: NbaPlayers) {
    return this.http.post<NbaPlayers>(this.url, nbaPlayer);
  }
}
