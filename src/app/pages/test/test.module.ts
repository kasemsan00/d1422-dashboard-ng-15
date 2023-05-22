import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NbAlertModule, NbThemeModule } from '@nebular/theme';

import { TestRoutingModule } from './test-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

import { TestComponent } from './test.component';

@NgModule({
  imports: [
    TestRoutingModule,
    BrowserModule,
    RouterModule,
    ThemeModule,
    NbThemeModule.forRoot(),
    NbAlertModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [TestComponent],
  providers: [],
  declarations: [TestComponent],
})
export class TestModule {}
