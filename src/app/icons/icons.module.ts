import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'

import {
	Home,
	Users,
	Mail,
	Bell,
	ChevronDown,
	Search,
	Check,
	User,
	Inbox,
} from 'angular-feather/icons'

const icons = {
	Home,
	Users,
	User,
	Mail,
	Bell,
	ChevronDown,
	Search,
	Check,
	Inbox,
}

@NgModule({
	imports: [FeatherModule.pick(icons)],
	exports: [FeatherModule],
})
export class IconsModule {}
