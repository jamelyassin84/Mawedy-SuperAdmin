import { AlertType } from './../../../models/alert.type'
import { Component, OnInit } from '@angular/core'
import { Alert } from 'src/app/models/alert.type'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
	constructor(private service: AlertService) {
		this.service.listen().subscribe((alert: Alert | any) => {
			this.alerts.push(alert)
		})
	}

	alerts: Alert[] = [] as Alert[]

	timer: any
	ngOnInit(): void {
		this.timer = setTimeout(() => {
			this.alerts.shift()
		}, 5000)
	}

	close(index: number) {
		this.alerts.splice(index, 1)
	}

	ngOnDestroy(): void {
		clearInterval(this.timer)
	}
}
