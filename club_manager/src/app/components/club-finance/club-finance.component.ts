import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-club-finance',
  templateUrl: './club-finance.component.html',
  styleUrls: ['./club-finance.component.css']
})
export class ClubFinanceComponent implements OnInit {

  finance: boolean = true;

  wageForm: FormGroup;

  wageInput: any;

  constructor(private playerService: PlayerService, fb: FormBuilder) {
    this.wageForm = fb.group({
      currentMoney: [''],
      monthlyIncome: [''],
    });
   }

  ngOnInit(): void {
  }

  get currentMoney(): FormControl {
    return this.wageForm.get('wage') as FormControl;
  }

  get monthlyIncome(): FormControl {
    return this.wageForm.get('wage') as FormControl;
  }

  onSubmit() {
    this.wageInput = this.wageForm.value;
  }

}
