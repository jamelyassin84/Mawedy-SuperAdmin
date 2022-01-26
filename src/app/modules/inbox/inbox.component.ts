import { Observable } from 'rxjs'
import { ROUTES } from './../../services/api/routes'
import { BaseService } from './../../services/api/base.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { AppInboxDto } from 'src/app/models/inbox'

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getMessages()
	}

	inboxes: AppInboxDto[] = [] as AppInboxDto[]

	getMessages(): void {
		new BaseService(this.http, ROUTES.APP_INBOX)
			.index()
			.subscribe((data: AppInboxDto[]) => (this.inboxes = data))
	}
}
