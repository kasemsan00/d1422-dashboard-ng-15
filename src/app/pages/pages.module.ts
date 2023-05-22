import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  NbMenuModule,
  NbCardModule,
  NbUserModule,
  NbListModule,
  NbAlertModule,
  NbIconModule,
  NbBadgeModule,
  NbProgressBarModule,
  NbButtonModule,
  NbRadioModule,
  NbSelectModule,
  NbSidebarModule,
  NbDialogModule,
  NbToastrModule,
  NbThemeModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbAlertModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbIconModule,
    NbBadgeModule,
    NbProgressBarModule,
    NbButtonModule,
    NbRadioModule,
    NbSelectModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbSidebarModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [PagesComponent],
})
export class PagesModule {}
