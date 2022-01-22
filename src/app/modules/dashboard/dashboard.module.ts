import { IconsModule } from './../../icons/icons.module'
import { WebSessionsComponent } from './../../components/utilities/web-sessions/web-sessions.component'
import { TopLocationComponent } from './../../components/utilities/top-location/top-location.component'
import { AppSessionsComponent } from './../../components/utilities/app-sessions/app-sessions.component'
import { DashboardCircleComponent } from './../../components/utilities/dashboard-circle/dashboard-circle.component'
import { CRMModule } from './../crm/crm.module'

import { BackToolbarComponent } from './../../components/toolbars/back-toolbar/back-toolbar.component'
import { DashboardToolbarComponent } from './../../components/toolbars/dashboard-toolbar/dashboard-toolbar.component'

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OverviewComponent } from './overview/overview.component'
import { AnalyticsComponent } from './analytics/analytics.component'
import { ClinicRankComponent } from 'src/app/components/utilities/clinic-rank/clinic-rank.component'
import { ServiceMostSearchComponent } from 'src/app/components/utilities/service-most-search/service-most-search.component'
import { NgChartsModule } from 'ng2-charts'
import { OnlineEngagementComponent } from './analytics/components/online-engagement/online-engagement.component'
import { WebsiteTrafficComponent } from './analytics/components/website-traffic/website-traffic.component'

@NgModule({
	declarations: [
		OverviewComponent,
		AnalyticsComponent,
		DashboardToolbarComponent,
		BackToolbarComponent,
		DashboardCircleComponent,
		ClinicRankComponent,
		ServiceMostSearchComponent,
		AppSessionsComponent,
		TopLocationComponent,
		WebSessionsComponent,
		OnlineEngagementComponent,
		WebsiteTrafficComponent,
	],
	imports: [CommonModule, CRMModule, NgChartsModule, IconsModule],
	exports: [
		OverviewComponent,
		AnalyticsComponent,
		DashboardToolbarComponent,
		BackToolbarComponent,
		DashboardCircleComponent,
		ClinicRankComponent,
		ServiceMostSearchComponent,
		AppSessionsComponent,
		TopLocationComponent,
		WebSessionsComponent,
	],
})
export class DashboardModule {}
