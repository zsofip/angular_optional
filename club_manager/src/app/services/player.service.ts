import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  initialPlayers: Player[]; // needed only for mocking purposes, an instant set of players until the localStorage is empty
  players: Player[] = this.getLocalPlayers("players");

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
        name: 'Bread Pitt',
        shirtNumber: 5,
        team: 'Green',
        age: 35,
        wage: 4200,
        contractEnd: new Date(2022, 12, 31)
      },
    ]
  }
  public getLocalPlayers(key: string) {
    this.players = JSON.parse(localStorage.getItem(key) || '[]');
    return this.players;
  }

  public getLocalPlayerById(id: number) {
    const index = this.players.findIndex(item => item.id == id);
    return this.players[index];
  }

  public addNewPlayer(player: Player) {
    player.id = this.players.length + 1;
    this.players.push(player);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

  public saveLocalPlayer(player: Player) {
    const index = this.players.findIndex(item => item.id == player.id);
    this.players.splice(index, 1, player);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

  public getPlayersGroupedByTeams() {
    return this.players.reduce((groups, item) => {
      const key = item.team as keyof Player;
          groups[key] = groups[key] || [];
          groups[key].push(item);
          return groups;
      }, Object.create(null));
  }

  public saveLocalPlayers(key: string, value: Player[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removePlayer(player: Player): void {
    const index = this.players.findIndex( item => item.id === player.id );
    this.players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

  public getNumberOfPlayers() {
    return this.players.length;
  }

  public getSummaWage() {
    return this.players.reduce((acc, obj) => acc + obj.wage, 0);
  }

  public getHighestWagePlayer() {
    const richPlayer = this.players.reduce((prev, curr) => (prev.wage > curr.wage) ? prev : curr);
    return richPlayer.name;
  }

  public getHighestWage() {
    const richPlayer = this.players.reduce((prev, curr) => (prev.wage > curr.wage) ? prev : curr);
    return richPlayer.wage;
  }

  public getWagesGroupedByTeams(team: any) {
    return team.reduce((acc: any, obj: { wage: any; }) => acc + obj.wage, 0);
  }

}
