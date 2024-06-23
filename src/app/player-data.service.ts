// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class PlayerDataService {
//   private _userInfoVerified: boolean = false;
//   private _playerName: string = '';
//   private _token: string = '';

//   public get isVerified() {
//     return this._userInfoVerified;
//   }
//   public verifyUser(): void {
//     this._userInfoVerified = true;
//   }
//   public reset(): void {
//     this._userInfoVerified = false;
//     this.clearPlayerData();
//   }

//   constructor() {}

//   setPlayerData(name: string, token: string): void {
//     this._playerName = name;
//     this._token = token;
//   }

//   getPlayerName(): string {
//     return this._playerName;
//   }

//   getToken(): string {
//     return this._token;
//   }

//   hasPlayerData(): boolean {
//     return this._playerName !== '' && this._token !== '';
//   }

//   clearPlayerData(): void {
//     this._playerName = '';
//     this._token = '';
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private _userInfoVerified: boolean = false;

  public get isVerified() {
    return this._userInfoVerified;
  }
  public verifyUser(): void {
    this._userInfoVerified = true;
  }
  public reset(): void {
    this._userInfoVerified = false;
    this.clearPlayerData();
  }

  constructor() {
    this.loadPlayerData();
  }

  setPlayerData(name: string, token: string): void {
    localStorage.setItem('playerName', name);
    localStorage.setItem('token', token);
  }

  getPlayerName(): string {
    return localStorage.getItem('playerName') || '';
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  hasPlayerData(): boolean {
    return this.getPlayerName() !== '' && this.getToken() !== '';
  }

  clearPlayerData(): void {
    localStorage.removeItem('playerName');
    localStorage.removeItem('token');
  }

  private loadPlayerData(): void {
    const playerName = localStorage.getItem('playerName');
    const token = localStorage.getItem('token');
    if (playerName && token) {
      this._userInfoVerified = true;
    }
  }
}
