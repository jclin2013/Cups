import { Component } from '@angular/core';

export class Cup {
  id: number;
  material: string;
  name: string;
  display: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'Cups';
  cup: Cup = {
    id: 1,
    name: 'Starbucks',
    material: 'glass',
    display: 'large'
  }
}
