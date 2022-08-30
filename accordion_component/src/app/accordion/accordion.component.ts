import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  items: { title: string; description: string, expanded?: boolean; }[];


  constructor() {
    this.items = [
      {
        title: 'Acc1',
        description: 'First item description can be found here.',
      },
      {
        title: 'Acc2',
        description: 'Second item description can be found here.',
      },
      {
        title: 'Acc3',
        description: 'Third item description can be found here.',
      },
    ];
  }

  ngOnInit(): void {}

  select(index: number) {
    let selectedItem =  this.items[index];
    selectedItem.expanded = !selectedItem.expanded;
  }
}
