import { InboxToolbarComponent } from './../../components/toolbars/inbox-toolbar/inbox-toolbar.component'
import { BackToolbarComponent } from './../../components/toolbars/back-toolbar/back-toolbar.component'
import { DashboardToolbarComponent } from './../../components/toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { MessageDetailsComponent } from './../message-details/message-details.component'
import { ToolbarsComponent } from '../../shared/toolbars/toolbars.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverviewComponent } from './overview/overview.component'
import { AnalyticsComponent } from './analytics/analytics.component'

@NgModule({
	declarations: [
		OverviewComponent,
		AnalyticsComponent,
		ToolbarsComponent,
		MessageDetailsComponent,
		DashboardToolbarComponent,
		BackToolbarComponent,
		InboxToolbarComponent,
	],
	imports: [CommonModule],
	exports: [
		OverviewComponent,
		AnalyticsComponent,
		ToolbarsComponent,
		MessageDetailsComponent,
		DashboardToolbarComponent,
		BackToolbarComponent,
		InboxToolbarComponent,
	],
})
export class DashboardModule {}
