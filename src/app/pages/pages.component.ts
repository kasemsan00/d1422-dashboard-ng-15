import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-dashboard-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
