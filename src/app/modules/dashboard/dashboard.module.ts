import { DashboardCircleComponent } from './../../components/utilities/dashboard-circle/dashboard-circle.component'
import { CRMModule } from './../crm/crm.module'

import { BackToolbarComponent } from './../../components/toolbars/back-toolbar/back-toolbar.component'
import { DashboardToolbarComponent } from './../../components/toolbars/dashboard-toolbar/dashboard-toolbar.component'
import { MessageDetailsComponent } from './../message-details/message-details.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverviewComponent } from './overview/overview.component'
import { AnalyticsComponent } from './analytics/analytics.component'

@NgModule({
	declarations: [
		OverviewComponent,
		AnalyticsComponent,
		MessageDetailsComponent,
		DashboardToolbarComponent,
		BackToolbarComponent,
		DashboardCircleComponent,
	],
	imports: [CommonModule, CRMModule],
	exports: [
		OverviewComponent,
		AnalyticsComponent,
		MessageDetailsComponent,
		DashboardToolbarComponent,
		BackToolbarComponent,
		DashboardCircleComponent,
	],
})
export class DashboardModule {}
