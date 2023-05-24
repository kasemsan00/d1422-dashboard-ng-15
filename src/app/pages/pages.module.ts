import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
  NbLayoutModule,
} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../services/token.interceptor';
import { AppInitService } from '../app.init';
import { init_app } from '../app.module';

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
    NbLayoutModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true,
    },
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
