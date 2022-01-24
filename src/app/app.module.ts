import { InboxModule } from './modules/inbox/inbox.module'
import { CRMModule } from './modules/crm/crm.module'
import { DashboardModule } from './modules/dashboard/dashboard.module'
import { IconsModule } from './icons/icons.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { NavbarComponent } from './shared/navbar/navbar.component'
import { SidbarComponent } from './shared/sidbar/sidbar.component';
import { AlertComponent } from './components/utilities/alert/alert.component'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		NavbarComponent,
		SidbarComponent,
  AlertComponent,
	],
	imports: [
		IconsModule,
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		BrowserAnimationsModule,
		HttpClientModule,

		DashboardModule,
		CRMModule,
		InboxModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
