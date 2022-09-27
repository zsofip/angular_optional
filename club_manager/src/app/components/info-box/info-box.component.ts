import { PlayerService } from 'src/app/services/player.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() stat?: boolean;
  @Input() wg?: boolean;
  @Input() finance?: boolean;

  @Input() currentMoney?: number;
  @Input() monthlyIncome?: number;

  title!: string;
  value1!: string;
  value2!: string;

  numberOfPlayers: number;
  summaWage: number;

  highestWagePlName!: string;
  highestWage!: number;

  expectedMoney: number;
  stability: string = '';
  runOut: number = 0;

  constructor(private playerService: PlayerService) {
    this.numberOfPlayers = this.playerService.getNumberOfPlayers();
    this.summaWage = this.playerService.getSummaWage();

    this.highestWagePlName = this.playerService.getHighestWagePlayer();
    this.highestWage = this.playerService.getHighestWage();

    this.expectedMoney = (this.currentMoney || 0) + (this.monthlyIncome || 0) - this.summaWage;
  }

  ngOnInit(): void {
    if (this.stat) {
      this.title = 'Statistic Box';
      this.value1 = 'Number of players:';
      this.value2 = 'Summa wage:';
    } else if (this.wg) {
      this.title = 'Wage info';
      this.value1 = 'Highest played player:';
      this.value2 = 'Wage:';
    } else {
      this.title = 'Wage info box';
      this.value1 = 'Expected money at the end of next month:';
      this.value2 = 'Club financial stability:';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentMoney'] || changes['monthlyIncome']) {
      this.expectedMoney = (this.currentMoney || 0) + (this.monthlyIncome || 0) - this.summaWage;
      if ((this.monthlyIncome || 0) >= this.summaWage) {
        this.stability = "The club is financially stable"
      } else {
        this.runOut = Math.floor((this.currentMoney || 0) / (this.summaWage - (this.monthlyIncome || 0)));
        this.stability = `The club’s financial reserves run out after ${this.runOut} month`
      }
    }
  }

}

