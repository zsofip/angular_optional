import { Component } from '@angular/core';
import { Player } from './models/player';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'club_manager';

  initialPlayers: Player[];
  players!: Player[];

  constructor(private playerService: PlayerService) {
    this.initialPlayers = this.playerService.initialPlayers;
  }

  ngOnInit(): void {
    this.players = this.playerService.getLocalPlayers("players");
    if(this.players.length == 0) {
       this.initialPlayers.forEach(item => this.players.push(item));
       this.playerService.saveLocalPlayers("players", this.players)
    }
  }
}
