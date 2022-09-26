import { PlayerService } from './../../services/player.service';
import { Player } from '../../models/player';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  currentPlayer!: Player;
  currentId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService) {
    this.currentId = route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.currentPlayer = this.playerService.getLocalPlayerById(this.currentId);
  }

  deletePlayer(currentPlayer: Player) {
    this.playerService.removePlayer(currentPlayer);
    this.router.navigate(['/', 'players']);
  }

}
