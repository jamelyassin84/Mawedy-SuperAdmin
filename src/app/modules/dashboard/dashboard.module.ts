import { ToolbarsComponent } from '../../shared/toolbars/toolbars.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverviewComponent } from './overview/overview.component'
import { AnalyticsComponent } from './analytics/analytics.component'

@NgModule({
	declarations: [OverviewComponent, AnalyticsComponent, ToolbarsComponent],
	imports: [CommonModule],
	exports: [OverviewComponent, AnalyticsComponent, ToolbarsComponent],
})
export class DashboardModule {}
