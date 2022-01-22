import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'clinic-data-card',
	templateUrl: './clinic-data-card.component.html',
	styleUrls: ['./clinic-data-card.component.scss'],
})
export class ClinicDataCardComponent implements OnInit {
	constructor() {}

	@Input() background!: string
	@Input() color!: string
	@Input() title!: string
	@Input() value!: string
	@Input() secondTitle!: string
	@Input() secondValue!: string
	@Input() callback!: any

	ngOnInit(): void {}
}
