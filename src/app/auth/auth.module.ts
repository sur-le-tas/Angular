import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { AuthPage } from './auth.page'
import { AuthFormComponent } from './auth-form.component'
import { AuthRememberComponent } from './auth-remember.component'

const routes: Routes = [{ path: 'connexion', component: AuthPage }]

@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes)],
	declarations: [AuthFormComponent, AuthRememberComponent, AuthPage],
})
export class AuthModule {}
