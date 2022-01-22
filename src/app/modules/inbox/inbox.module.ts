import { IconsModule } from './../../icons/icons.module'
import { DashboardModule } from './../dashboard/dashboard.module'
import { InboxToolbarComponent } from './../../components/toolbars/inbox-toolbar/inbox-toolbar.component'
import { CRMModule } from './../crm/crm.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InboxComponent } from './inbox.component'

@NgModule({
	declarations: [InboxComponent, InboxToolbarComponent],
	imports: [CommonModule, CRMModule, DashboardModule, IconsModule],
	exports: [InboxComponent, InboxToolbarComponent],
})
export class InboxModule {}
