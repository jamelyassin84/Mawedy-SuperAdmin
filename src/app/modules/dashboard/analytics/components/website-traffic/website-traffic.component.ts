import { Component, OnInit } from '@angular/core'
import { analyticChartConfig } from '../../analytic.chart.config'

@Component({
	selector: 'dashboard-website-traffic',
	templateUrl: './website-traffic.component.html',
	styleUrls: ['./website-traffic.component.scss'],
})
export class WebsiteTrafficComponent implements OnInit {
	constructor() {}
	analyticsChart: any = analyticChartConfig

	ngOnInit(): void {}
}
