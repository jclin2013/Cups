import { Component, OnInit } from '@angular/core';
import { CupService } from './cup.service';
import { Cup } from './cup';

import { Router } from '@angular/router';

@Component({
  selector: 'my-cups-table',
  templateUrl: './cups-table.component.html',
  styleUrls: [ './cups-table.component.css' ]
})

export class CupsTableComponent implements OnInit {
  cups: Cup[];

  save(cup: Cup): void {
    this.cupService.update(cup);
  }

  saveAll(cups: Cup[]): void {
    this.cupService.updateAll(cups);
  }

  getCups(): void {
    this.cupService.getCups().then(cups => {
      this.cups = cups;
      this.createPlaceHolders(cups);
    });
  }

  placeholders = {}

  createPlaceHolders(cups: Cup[]): void {
    cups.forEach(cup => {
      this.placeholders[cup.id] = cup.name;
    });
  }

  ngOnInit(): void {
    this.getCups();
  }

  constructor(
    private router: Router,
    private cupService: CupService
  ) {}

  gotoCupsForm(): void {
    this.router.navigate(['/cupsform']);
  }

  delete(cup: Cup): void {
  this.cupService
      .delete(cup.id)
      .then(() => {
        this.cups = this.cups.filter(c => c !== cup);
      });
  }
}
