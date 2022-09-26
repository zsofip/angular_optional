import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players!: Player[];

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getLocalPlayers("players");
  }

  ngOnInit(): void {
  }

}
