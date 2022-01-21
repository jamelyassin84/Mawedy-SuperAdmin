import { DashboardTabs, TabType } from './Dasboard.route'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-dashboard-toolbar',
	templateUrl: './dashboard-toolbar.component.html',
	styleUrls: ['./dashboard-toolbar.component.scss'],
})
export class DashboardToolbarComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}
	tabs: TabType[] = DashboardTabs

	today = Date.now()

	activeTab: number = 1

	ngOnInit(): void {
		this.changeTab()
	}

	setActiveTab(tab: TabType) {
		this.router.navigate([tab.route])
	}

	changeTab() {
		if (this.router.url.includes('overview')) {
			this.activeTab = 1
		}
		if (this.router.url.includes('analytics')) {
			this.activeTab = 2
		}
	}
}
