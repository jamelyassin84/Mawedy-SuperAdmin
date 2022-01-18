import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { AnalyticsComponent } from './analytics/analytics.component';



@NgModule({
  declarations: [
    OverviewComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
