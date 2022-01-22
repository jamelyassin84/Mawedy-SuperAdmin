import { ClinicDataCardComponent } from './../../components/utilities/clinic-data-card/clinic-data-card.component'
import { TopServicesComponent } from './../../components/utilities/top-services/top-services.component'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IconsModule } from './../../icons/icons.module'
import { ToolbarsComponent } from './../../shared/toolbars/toolbars.component'
import { CrmToolbarComponent } from './../../components/toolbars/crm-toolbar/crm-toolbar.component'
import { CommonModule } from '@angular/common'
import { AdminUserListComponent } from './admin-user/admin-user-list/admin-user-list.component'
import { AdminUserDetailsComponent } from './admin-user/admin-user-details/admin-user-details.component'
import { AppUserListComponent } from './app-user/app-user-list/app-user-list.component'
import { AppUserDetailsComponent } from './app-user/app-user-details/app-user-details.component'
import { PremiumUserListComponent } from './premium-user/premium-user-list/premium-user-list.component'
import { BackToolbarComponent } from './../../components/toolbars/back-toolbar/back-toolbar.component'
@NgModule({
	declarations: [
		AdminUserListComponent,
		AdminUserDetailsComponent,
		AppUserListComponent,
		AppUserDetailsComponent,
		PremiumUserListComponent,
		CrmToolbarComponent,
		ToolbarsComponent,
		BackToolbarComponent,
		TopServicesComponent,
		ClinicDataCardComponent,
	],
	imports: [CommonModule, IconsModule, RouterModule],
	exports: [
		AdminUserListComponent,
		AdminUserDetailsComponent,
		AppUserListComponent,
		AppUserDetailsComponent,
		PremiumUserListComponent,
		CrmToolbarComponent,
		ToolbarsComponent,
		BackToolbarComponent,
		TopServicesComponent,
		ClinicDataCardComponent,
	],
})
export class CRMModule {}
