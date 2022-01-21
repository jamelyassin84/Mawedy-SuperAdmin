import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-clinic-rank',
	templateUrl: './clinic-rank.component.html',
	styleUrls: ['./clinic-rank.component.scss'],
})
export class ClinicRankComponent implements OnInit {
	constructor() {}

	@Input() service!: string
	@Input() department!: string
	@Input() value!: number
	ngOnInit(): void {}
}
