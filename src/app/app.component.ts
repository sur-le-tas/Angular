import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<app-navbar></app-navbar>

		<main class="container mt-3">
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent implements OnInit {
	// On utlise constructor pour l'injection de dépendance et ngOnInit pour le reste.
	constructor() {}

	ngOnInit() {}
}
