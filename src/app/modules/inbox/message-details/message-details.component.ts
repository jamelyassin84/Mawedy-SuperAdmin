import { ClinicDto } from './../../../models/clinic.type'
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core'
import { BaseService } from 'src/app/services/api/base.service'
import { ROUTES } from 'src/app/services/api/routes'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-message-details',
	templateUrl: './message-details.component.html',
	styleUrls: ['./message-details.component.scss'],
})
export class MessageDetailsComponent implements OnInit {
	constructor(private http: HttpClient, private route: ActivatedRoute) {
		const id = this.route.snapshot.paramMap.get('id')
		this.getClinic(id)
	}

	id = 0

	clinic!: ClinicDto

	@ViewChildren('activateBtn') activateBtn!: ElementRef

	getClinic(id: any) {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(id)
			.subscribe((data: ClinicDto) => (this.clinic = data))
	}

	isProcessing: boolean | 'complete' = false

	activate(id: number | undefined) {
		this.isProcessing = true

		new BaseService(this.http, `${ROUTES.CLINICS}/activate`)
			.create({ id: id })
			.subscribe({
				complete: () => {
					setTimeout(() => {
						this.isProcessing = 'complete'
						this.getClinic(id)
					}, 2700)
				},
			})
	}

	ngOnInit(): void {}
}
