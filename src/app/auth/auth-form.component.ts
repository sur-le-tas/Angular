import { Component, OnInit, EventEmitter, Output, AfterContentInit, ContentChild } from '@angular/core'
import { AuthRememberComponent } from './auth-remember.component'

// ng-content dynamise les composants en projetant du DOM à l'intérieur.
// L'attribut select (qui fonctionne comme querySelector), permet de projeter plus précisément les noeuds DOM.

@Component({
	selector: 'auth-form',
	template: `
		<ng-content select="h3"></ng-content>

		<form #form="ngForm" (ngSubmit)="submitter.emit()">
			<div class="form-group">
				<label>Email</label>
				<input type="text" class="form-control" name="email" required ngModel />
			</div>
			<div class="form-group">
				<label>Mot de passe</label>
				<input type="text" class="form-control" name="password" required ngModel />
			</div>

			<ng-content select="auth-remember"></ng-content>
			<p *ngIf="isRemembered" class="text-muted">Vous resterez connecté !</p>
			<ng-content select="button[type=submit]"></ng-content>
		</form>
	`,
	styles: [],
})
export class AuthFormComponent implements OnInit, AfterContentInit {
	isRemembered: boolean

	@ContentChild(AuthRememberComponent) rememberComponent: AuthRememberComponent

	@Output()
	submitter = new EventEmitter<any>()

	constructor() {}

	ngAfterContentInit() {
		if (this.rememberComponent) {
			this.rememberComponent.checker.subscribe((checked: boolean) => {
				this.isRemembered = checked
			})
		}
	}

	ngOnInit() {}
}
