import { Component, OnInit } from '@angular/core';
import { CupService } from './cup.service';

@Component({
  selector: 'my-cups-table',
  templateUrl: './cups-table.component.html',
  styleUrls: [ './cups-table.component.css' ]
})

export class CupsTableComponent implements OnInit {
  selectedCup: Cup;

  onSelect(cup: Cup): void {
    this.selectedCup = cup;
  };

  cups: Cup[];

  constructor(private cupService: CupService) { };

  getCups(): void {
    this.cupService.getCups().then(cups => this.cups = cups);
  }

  ngOnInit(): void {
    this.getCups();
  }
}
