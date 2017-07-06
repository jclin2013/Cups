import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/cups-table">Cups</a>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/cupsform">Add a New Cup</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Cups';
}
