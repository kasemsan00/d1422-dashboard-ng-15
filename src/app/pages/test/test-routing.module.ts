import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { NbAlertModule } from '@nebular/theme';

const routes: Routes = [
  {
    path: '/test',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NbAlertModule],
  exports: [RouterModule],
})
export class TestRoutingModule {}
