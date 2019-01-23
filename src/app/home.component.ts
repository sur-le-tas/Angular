import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home',
	template: `
		<h1 class="text-center">{{ title }}</h1>
	`,
	styles: [],
})
export class HomeComponent implements OnInit {
	title = 'Sur le tas'

	constructor() {}

	ngOnInit() {}
}
