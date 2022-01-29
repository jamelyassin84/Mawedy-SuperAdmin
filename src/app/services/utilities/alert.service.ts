import { Alert } from './../../models/alert.type'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	constructor() {}

	private alert = new Subject<Alert | undefined>()

	Fire(data: Alert | undefined): void {
		this.alert.next(data)
	}

	listen() {
		return this.alert.asObservable()
	}
}
