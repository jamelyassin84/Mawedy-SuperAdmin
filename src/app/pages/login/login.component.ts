import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	isProcessing: boolean | 'complete' = false

	data = {
		username: '',
		password: '',
	}

	login() {
		this.isProcessing = true

		setTimeout(() => {
			this.isProcessing = 'complete'
			setTimeout(() => {
				this.router.navigate(['/home'])
			}, 700)
		}, 1500)
	}
}
