import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NbAlertModule } from '@nebular/theme';

const routes: Routes = [
  {
    path: 'test',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NbAlertModule],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
