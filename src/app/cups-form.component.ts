import { Component } from '@angular/core';
import { CupService } from './cup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-cups-form',
  templateUrl: './cups-form.component.html',
  //styleUrls: [ './cups-form.component.css' ]
})

export class CupsFormComponent {
  constructor(
    private router: Router,
    private cupService: CupService
  ) {}

  gotoCupsTable(): void {
    this.router.navigate(['/cups-table']);
  }

  add(name: string, material: string, display: string): void {
    name = name.trim();
    if (!name || !material || !display) { return; }
    this.cupService.create(name, material, display)
      .then(() => this.gotoCupsTable());
  }


}
