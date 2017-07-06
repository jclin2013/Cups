import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id='consoleContainer'>
      <h1>CUPS</h1>
      <nav>
        <a routerLink="/cupsform" routerLinkActive="active">Add a New Cup</a>
        <a routerLink="/cups-table" routerLinkActive="active">Cups</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,

})

export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
}

//<div ng-init="myImage = 'cup.png'">
//</div>
