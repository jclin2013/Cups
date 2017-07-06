import { Component, OnInit } from '@angular/core';

import { Cup } from './cup';
import { CupService } from './cup.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './cups-dashboard.component.html',
  styleUrls: ['./cups-dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cups: Cup[] = [];

  constructor(private cupService: CupService) { }

  ngOnInit(): void {
    this.cupService.getCups()
      .then(cups => this.cups = cups);
  }
}
