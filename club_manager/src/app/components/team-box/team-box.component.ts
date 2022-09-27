import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-team-box',
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.css']
})
export class TeamBoxComponent implements OnInit {

  teams: any[];

  teamWages?: number[];

  groupedByTeams: boolean = true;

  constructor(private playerService: PlayerService) {
    this.teams = this.playerService.getPlayersGroupedByTeams();
  }

  ngOnInit(): void {
  }

  getTeamWage(team: any) {
    this.teamWages = this.playerService.getWagesGroupedByTeams(team);
    return this.teamWages;
  }

}
