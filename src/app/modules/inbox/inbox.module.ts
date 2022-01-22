import { RouterModule } from '@angular/router'
import { IconsModule } from './../../icons/icons.module'
import { DashboardModule } from './../dashboard/dashboard.module'
import { InboxToolbarComponent } from './../../components/toolbars/inbox-toolbar/inbox-toolbar.component'
import { CRMModule } from './../crm/crm.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InboxComponent } from './inbox.component'
import { MessageDetailsComponent } from './message-details/message-details.component'

@NgModule({
	declarations: [
		InboxComponent,
		InboxToolbarComponent,
		MessageDetailsComponent,
	],
	imports: [
		CommonModule,
		CRMModule,
		DashboardModule,
		IconsModule,
		RouterModule,
	],
	exports: [InboxComponent, InboxToolbarComponent, MessageDetailsComponent],
})
export class InboxModule {}
