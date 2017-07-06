import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { CupsTableComponent }  from './cups-table.component';
import { DashboardComponent }  from './dashboard.component';
import { CupService } from './cup.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: 'cups-table',
          component: CupsTableComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
      ])
    ],
  declarations: [
      AppComponent,
      DashboardComponent,
      CupsTableComponent
    ],
  providers: [CupService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
