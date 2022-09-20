import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  newPlayer: Player = new Player();
  currentPlayer!: Player;
  currentId!: number;
  playerForm: FormGroup;
  title!: string;

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService, fb: FormBuilder) {
    this.playerForm = fb.group({
      id: [''],
      name: ['', [Validators.required]],
      shirtNumber: ['', [Validators.required]],
      team: ['', [Validators.required]],
      age: ['', [Validators.required]],
      wage: ['', [Validators.required]],
      contractEnd: ['', [Validators.required]],
    });

    this.currentId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.currentId == 0) {
      this.currentPlayer = this.newPlayer;
      this.title = 'Add player page';
    } else {
      this.currentPlayer = this.playerService.getLocalPlayer(this.currentId);
      this.title = this.currentPlayer.name;

      const { id, name, shirtNumber, team, age, wage, contractEnd } = this.currentPlayer;
      this.playerForm.patchValue({
        id, name, shirtNumber, team, age, wage, contractEnd
      })
    }
  }

  get id(): FormControl {
    return this.playerForm.get('id') as FormControl;
  }
  get name(): FormControl {
    return this.playerForm.get('name') as FormControl;
  }
  get shirtNumber(): FormControl {
    return this.playerForm.get('shirtNumber') as FormControl;
  }
  get team(): FormControl {
    return this.playerForm.get('team') as FormControl;
  }
  get age(): FormControl {
    return this.playerForm.get('age') as FormControl;
  }
  get wage(): FormControl {
    return this.playerForm.get('wage') as FormControl;
  }
  get contractEnd(): FormControl {
    return this.playerForm.get('contractEnd') as FormControl;
  }

  onSavePlayer(): void {
    const savedPlayer: Player = this.playerForm.value as Player;
    if (this.currentId == 0) {
      this.playerService.addNewPlayer(savedPlayer);
    } else {
      this.playerService.saveLocalPlayer(savedPlayer);
    }
    this.router.navigate(['/', 'players']);
  }

}
