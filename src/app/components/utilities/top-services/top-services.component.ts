import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'top-services',
	templateUrl: './top-services.component.html',
	styleUrls: ['./top-services.component.scss'],
})
export class TopServicesComponent implements OnInit {
	constructor() {}

	@Input() service!: string
	@Input() department!: string
	@Input() value!: number
	ngOnInit(): void {}
}
