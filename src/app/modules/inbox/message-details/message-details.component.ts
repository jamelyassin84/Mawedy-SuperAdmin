import { ClinicDto } from './../../../models/clinic.type'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
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
		this.getClinic(this.route.snapshot.paramMap.get('id'))
	}

	ngOnInit(): void {}

	clinic!: ClinicDto
	getClinic(id: any) {
		new BaseService(this.http, ROUTES.CLINICS)
			.show(id)
			.subscribe((data: ClinicDto) => (this.clinic = data))
	}
}
