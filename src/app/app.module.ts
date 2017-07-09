import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { CupsTableComponent }  from './cups-table.component';
import { DashboardComponent }  from './dashboard.component';
import { CupsFormComponent }  from './cups-form.component';
import { CupService } from './cup.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      CupsTableComponent,
      CupsFormComponent
    ],
  providers: [ CupService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
