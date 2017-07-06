import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CupsTableComponent }  from './cups-table.component';
import { DashboardComponent }  from './dashboard.component';
import { CupsFormComponent }  from './cups-form.component';

const routes: Routes = [
  {
    path: 'cups-table',
    component: CupsTableComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cupsform',
    component: CupsFormComponent
  },
  {
    path: '',
    redirectTo: '/cupsform',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
