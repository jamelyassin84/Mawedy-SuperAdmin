import { analyticChartConfig } from './analytic.chart.config'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
	constructor() {}

	tab = 1

	ngOnInit(): void {}
}
