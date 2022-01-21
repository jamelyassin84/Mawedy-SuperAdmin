import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-service-most-search',
	templateUrl: './service-most-search.component.html',
	styleUrls: ['./service-most-search.component.scss'],
})
export class ServiceMostSearchComponent implements OnInit {
	constructor() {}

	@Input() service!: string
	@Input() department!: string
	@Input() value!: number
	ngOnInit(): void {}
}
