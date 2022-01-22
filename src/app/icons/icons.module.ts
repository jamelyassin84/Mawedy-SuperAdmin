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
	ChevronRight,
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
	ChevronRight,
}

@NgModule({
	imports: [FeatherModule.pick(icons)],
	exports: [FeatherModule],
})
export class IconsModule {}
