import { CrmToolbarComponent } from './../../components/toolbars/crm-toolbar/crm-toolbar.component'
import { DashboardModule } from './../dashboard/dashboard.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminUserListComponent } from './admin-user/admin-user-list/admin-user-list.component'
import { AdminUserDetailsComponent } from './admin-user/admin-user-details/admin-user-details.component'
import { AppUserListComponent } from './app-user/app-user-list/app-user-list.component'
import { AppUserDetailsComponent } from './app-user/app-user-details/app-user-details.component'
import { PremiumUserListComponent } from './premium-user/premium-user-list/premium-user-list.component'

@NgModule({
	declarations: [
		AdminUserListComponent,
		AdminUserDetailsComponent,
		AppUserListComponent,
		AppUserDetailsComponent,
		PremiumUserListComponent,
		CrmToolbarComponent,
	],
	imports: [CommonModule, DashboardModule],
	exports: [CrmToolbarComponent],
})
export class CRMModule {}
