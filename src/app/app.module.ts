import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
      AppRoutingModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
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
