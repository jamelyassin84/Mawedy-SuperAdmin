import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'home-toolbar',
	templateUrl: './toolbars.component.html',
	styleUrls: ['./toolbars.component.scss'],
})
export class ToolbarsComponent implements OnInit {
	constructor() {}

	@Input() component: any

	ngOnInit(): void {}
}
