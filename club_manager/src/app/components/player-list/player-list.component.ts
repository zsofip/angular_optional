import { PlayerService } from './../../services/player.service';
import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() groupedByTeams?: boolean;
  @Input() items!: Player[];


  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
  }

  deletePlayer(player: Player) {
    this.playerService.removePlayer(player);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/', this.route.routeConfig?.path]);
    });
  }
}
