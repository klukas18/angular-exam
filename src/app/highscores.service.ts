import { Injectable } from '@angular/core';
import { Score } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HighscoresService {
  constructor(private _http: HttpClient) {}

  load() {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this._http.get('https://scores.chrum.it/tetris', { headers });
  }

  public postMyScores(authToken: string, playerName: string, points: number) {
    const URL = 'https://scores.chrum.it/scores';
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': authToken,
    });
    const requestBody = { name: playerName, game: 'tetris', score: points };
    return this._http.post<Score[]>(URL, requestBody, { headers });
  }
}
