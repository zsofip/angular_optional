import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players!: Player[];

  constructor(private playerService: PlayerService, private router: Router) {
    this.players = this.playerService.getLocalPlayers("players");
  }

  ngOnInit(): void {
  }

  deletePlayer(player: Player) {
    this.playerService.removePlayer(player);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/', 'players']);
    });
  }

}
