import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  // URL OF JSON / REST API SERVER
  url_user: string = `http://localhost:3000/users`;
  url_company: string = `http://localhost:3000/companies`;

  // INJECT HTTP CLIENT IN CONSTRUCTOR
  constructor(private http: HttpClient) {}

  // get /users data from REST API server
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url_user);
  }

  // get /companies data from REST API server
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url_company);
  }

  // // ADD NEW PLAYER
  // ad(nbaPlayer: NbaPlayers) {
  //   return this.http.post<NbaPlayers>(this.url, nbaPlayer);
  // }

  // get user
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/user/${id}`);
  }
}
