import { MessageDetailsComponent } from './modules/message-details/message-details.component'
import { InboxComponent } from './modules/inbox/inbox.component'
import { AdminUserDetailsComponent } from './modules/crm/admin-user/admin-user-details/admin-user-details.component'
import { AppUserDetailsComponent } from './modules/crm/app-user/app-user-details/app-user-details.component'
import { PremiumUserListComponent } from './modules/crm/premium-user/premium-user-list/premium-user-list.component'
import { AppUserListComponent } from './modules/crm/app-user/app-user-list/app-user-list.component'
import { AdminUserListComponent } from './modules/crm/admin-user/admin-user-list/admin-user-list.component'
import { HomeComponent } from './pages/home/home.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { OverviewComponent } from './modules/dashboard/overview/overview.component'
import { AnalyticsComponent } from './modules/dashboard/analytics/analytics.component'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login',
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dashboard',
			},
			{
				path: 'dashboard',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'overview',
					},
					{
						path: 'overview',
						component: OverviewComponent,
					},
					{
						path: 'analytics',
						component: AnalyticsComponent,
					},
				],
			},
			{
				path: 'crm',
				children: [
					{
						path: '',
						pathMatch: 'full',
						redirectTo: 'admin-user',
					},
					{
						path: 'admin-user',
						component: AdminUserListComponent,
					},
					{
						path: 'admin-user-details',
						component: AdminUserDetailsComponent,
					},
					{
						path: 'app-user',
						component: AppUserListComponent,
					},
					{
						path: 'app-user-details',
						component: AppUserDetailsComponent,
					},
					{
						path: 'premium-user',
						component: PremiumUserListComponent,
					},
				],
			},
			{
				path: 'inbox',
				component: InboxComponent,
			},
			{
				path: 'message-details',
				component: MessageDetailsComponent,
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
