import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  initialPlayers: Player[];
  players!: Player[];

  constructor() {
    this.initialPlayers = [
      {
        id: 1,
        name: 'Ed Epic',
        shirtNumber: 21,
        team: 'Red',
        age: 21,
        wage: 2000,
        contractEnd: new Date(2023, 3, 23)
      },
      {
        id: 2,
        name: 'Fred Frenetic',
        shirtNumber: 12,
        team: 'Red',
        age: 19,
        wage: 1500,
        contractEnd: new Date(2025, 1, 11)
      },
      {
        id: 3,
        name: 'Bill Villain',
        shirtNumber: 13,
        team: 'Green',
        age: 20,
        wage: 1800,
        contractEnd: new Date(2024, 8, 10)
      },
      {
        id: 4,
        name: 'Thor Thunder',
        shirtNumber: 22,
        team: 'Green',
        age: 23,
        wage: 2200,
        contractEnd: new Date(2022, 12, 31)
      },
      {
        id: 5,
        name: 'Mock Player',
        shirtNumber: 22,
        team: 'Green',
        age: 23,
        wage: 2200,
        contractEnd: new Date(2022, 12, 31)
      },
    ]
  }
  public getLocalPlayers(key: string) {
    this.players = JSON.parse(localStorage.getItem(key) || '[]');
    return this.players;
  }

  public getLocalPlayer(id: number) {
    this.players = this.getLocalPlayers("players");
    const index = this.players.findIndex(item => item.id == id);
    return this.players[index];
  }

  public addNewPlayer(player: Player) {
    this.players = this.getLocalPlayers("players");
    player.id = this.players.length + 1;
    this.players.push(player);
    console.log('players:', this.players);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

  public saveLocalPlayer(player: Player) {
    this.players = this.getLocalPlayers("players");
    const index = this.players.findIndex(item => item.id == player.id);
    this.players.splice(index, 1, player);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

  public saveLocalPlayers(key: string, value: Player[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removePlayer(player: Player): void {
    this.players = this.getLocalPlayers("players");
    const index = this.players.findIndex( item => item.id === player.id );
    this.players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

}
