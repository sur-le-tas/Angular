import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'auth-page',
	template: `
		<auth-form (submitter)="registerUser($event)">
			<!-- content children -->
			<h3>Inscription</h3>
			<button type="submit" class="btn btn-primary mt-3">S'inscrire</button>
		</auth-form>

		<hr />

		<auth-form (submitter)="loginUser($event)">
			<!-- content children -->
			<h3>Connexion</h3>
			<auth-remember (checker)="rememberUser($event)"></auth-remember>
			<button type="submit" class="btn btn-primary mt-3">Se connecter</button>
		</auth-form>
	`,
	styles: [],
})
export class AuthPage implements OnInit {
	remembered = false

	constructor() {}

	ngOnInit() {}

	registerUser(input) {
		console.log('input', input)
	}

	loginUser(input) {
		console.log('input', input)
	}

	rememberUser(checked: boolean) {
		this.remembered = checked
	}
}
