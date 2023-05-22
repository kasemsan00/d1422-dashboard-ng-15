import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
// import { DashboardComponent } from './charts/dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
      },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      // },
      // {
      //   path: 'dashboard/:branch_id',
      //   component: DashboardComponent,
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () => import('./charts/charts.module')
      //     .then(m => m.ChartsModule),
      // },
      {
        path: 'miscellaneous',
        loadChildren: () =>
          import('./miscellaneous/miscellaneous.module').then(
            (m) => m.MiscellaneousModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
