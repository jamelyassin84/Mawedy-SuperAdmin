import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
	selector: 'app-back-toolbar',
	templateUrl: './back-toolbar.component.html',
	styleUrls: ['./back-toolbar.component.scss'],
})
export class BackToolbarComponent implements OnInit {
	constructor(private _location: Location) {}

	ngOnInit(): void {}

	back() {
		this._location.back()
	}
}
