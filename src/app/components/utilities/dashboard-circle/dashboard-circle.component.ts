import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'dashboard-circle',
	templateUrl: './dashboard-circle.component.html',
	styleUrls: ['./dashboard-circle.component.scss'],
})
export class DashboardCircleComponent implements OnInit {
	constructor() {}
	@Input() title!: string
	@Input() value!: number | string
	@Input() titleColor!: string
	@Input() circleColor!: string
	ngOnInit(): void {}
}
