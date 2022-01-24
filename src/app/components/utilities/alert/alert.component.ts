import { Component, OnInit } from '@angular/core'
import { alertAnimation } from 'src/app/animations/alert.animation'
import { Alert } from 'src/app/models/alert.type'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	animations: [alertAnimation],
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
		}, 1000)
	}

	close(index: number) {
		this.alerts.splice(index, 1)
	}

	ngOnDestroy(): void {
		clearInterval(this.timer)
	}
}
