import { ROUTES } from './../../services/api/routes'
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { BaseService } from 'src/app/services/api/base.service'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	@ViewChild('username') usernameInput!: ElementRef
	constructor(
		private router: Router,
		protected alert: AlertService,
		private http: HttpClient,
	) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.usernameInput.nativeElement.focus()
	}

	isProcessing: boolean | 'complete' = false

	data: any = {
		username: '',
		password: '',
		type: 'admin',
	}

	login(): void {
		this.isProcessing = true
		for (let key in this.data) {
			if (this.data[key] === '') {
				this.isProcessing = false
				this.clearFields()
				return this.alert.Fire({
					title: 'Error',
					description: `${
						key.charAt(0).toUpperCase() +
						key.substr(1).toLowerCase()
					} should not be empty`,
					type: 'error',
				})
			}
		}

		new BaseService(this.http, ROUTES.LOGIN).create(this.data).subscribe(
			(data) => {
				localStorage.setItem('user', JSON.stringify(data.user))
				localStorage.setItem('token', data.token)
				setTimeout(() => {
					this.isProcessing = 'complete'
					setTimeout(() => {
						this.router.navigate(['/home'])
					}, 700)
				}, 1500)
			},
			() => (this.isProcessing = false),
		)
	}

	clearFields(): void {
		for (let key in this.data) {
			this.data[key] = ''
		}
		this.data['type'] = 'admin'
		this.usernameInput.nativeElement.focus()
	}
}
