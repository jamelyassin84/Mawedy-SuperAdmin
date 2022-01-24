import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { AlertService } from 'src/app/services/utilities/alert.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	@ViewChild('username') usernameInput!: ElementRef
	constructor(private router: Router, protected alert: AlertService) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.usernameInput.nativeElement.focus()
	}

	isProcessing: boolean | 'complete' = false

	data = {
		username: '',
		password: '',
	}

	login() {
		this.isProcessing = true
		if (this.data.username === '' || this.data.password === '') {
			this.isProcessing = false
			this.alert.Fire({
				title: 'Error',
				description: 'Password should not be empty',
				type: 'error',
			})

			return this.alert.Fire({
				title: 'Error',
				description: 'Username should not be empty',
				type: 'error',
			})
		}
		setTimeout(() => {
			this.isProcessing = 'complete'
			setTimeout(() => {
				this.router.navigate(['/home'])
			}, 700)
		}, 1500)
	}
}
