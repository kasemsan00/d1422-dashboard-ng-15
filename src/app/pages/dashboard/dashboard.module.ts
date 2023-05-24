import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbAlertModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbContextMenuModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AgentBoxModule } from '../../components/agent-box/agent-box.module';
import { AbandonListModule } from '../../components/abandon-list/abandon-list.module';
import { CoreModule } from '../auth/services/core.module';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { DashboardChartComponent } from '../../components/dashboard-chart/dashboard-chart.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, DashboardChartComponent],
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
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NgOptimizedImage,
    ChartModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [DashboardComponent],
})
export class DashboardModule {}
