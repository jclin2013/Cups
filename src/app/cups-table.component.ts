import { Component, OnInit } from '@angular/core';
import { CupService } from './cup.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-cups-table',
  templateUrl: './cups-table.component.html',
  styleUrls: [ './cups-table.component.css' ]
})

export class CupsTableComponent implements OnInit {
  cups: Cup[];

  //constructor() { };

  getCups(): void {
    this.cupService.getCups().then(cups => this.cups = cups);
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
}
