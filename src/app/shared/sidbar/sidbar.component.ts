import { SidebarNavType } from './SidebarNavs'
import { Component, OnInit } from '@angular/core'
import { SidebarNav } from './SidebarNavs'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidbar.component.html',
	styleUrls: ['./sidbar.component.scss'],
})
export class SidbarComponent implements OnInit {
	nav: SidebarNavType[] = SidebarNav
	constructor() {}

	activeIcon!: string

	ngOnInit(): void {
		this.activeIcon = this.nav[0].name
	}

	setActiveIcon(nav: string) {
		this.activeIcon = nav
	}
}
