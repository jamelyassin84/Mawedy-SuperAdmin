import { Router } from '@angular/router'
import { TabType } from './../dashboard-toolbar/Dasboard.route'
import { Component, OnInit } from '@angular/core'
import { CRMTabs } from './CRM.routes'

@Component({
	selector: 'app-crm-toolbar',
	templateUrl: './crm-toolbar.component.html',
	styleUrls: ['./crm-toolbar.component.scss'],
})
export class CrmToolbarComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}
	tabs: TabType[] = CRMTabs

	today = Date.now()

	activeTab: number = 1

	ngOnInit(): void {
		this.changeTab()
	}

	setActiveTab(tab: TabType) {
		this.router.navigate([tab.route])
	}

	changeTab() {
		if (this.router.url.includes('trial')) {
			this.activeTab = 1
		}
		if (this.router.url.includes('app')) {
			this.activeTab = 3
		}
		// if (this.router.url.includes('app')) {
		// 	this.activeTab = 2
		// }
		if (this.router.url.includes('premium')) {
			this.activeTab = 4
		}
	}
}
