import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbAlertModule, NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AgentBoxModule } from '../../components/agent-box/agent-box.module';
import { AbandonListModule } from '../../components/abandon-list/abandon-list.module';
import { CoreModule } from '../auth/services/core.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbAlertModule,
    NbThemeModule.forRoot({ name: 'default' }),
    CoreModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbIconModule,
    AgentBoxModule,
    AbandonListModule,
    NbButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
