import { Injectable } from '@angular/core';
import { NbaPlayers } from './nba-players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NbaPlayersService {
  url: string = `assets/NBAPlayers.json`;

  constructor(private http: HttpClient) {}

  // get the data from json file
  getNbaPlayers(): Observable<NbaPlayers[]> {
    return this.http.get<NbaPlayers[]>(this.url);
  }
}
