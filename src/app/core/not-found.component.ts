import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-not-found',
	template: `
		<h1>Page non trouvée</h1>
	`,
	styles: [
		`
			/* cible le composant lui-même */
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
				height: calc(100vh - 56px);
				color: var(--danger);
			}
		`,
	],
})
export class NotFoundComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
