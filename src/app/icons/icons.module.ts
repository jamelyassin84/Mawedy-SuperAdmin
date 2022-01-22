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
	ArrowLeft,
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
	ArrowLeft,
}

@NgModule({
	imports: [FeatherModule.pick(icons)],
	exports: [FeatherModule],
})
export class IconsModule {}
