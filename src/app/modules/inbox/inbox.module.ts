import { DashboardModule } from './../dashboard/dashboard.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InboxComponent } from './inbox.component'

@NgModule({
	declarations: [InboxComponent],
	imports: [CommonModule, DashboardModule],
})
export class InboxModule {}
