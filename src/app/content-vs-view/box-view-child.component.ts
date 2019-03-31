import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'box-view-child',
	template: `
		<p class="text-{{ theme }}">Coché !</p>
	`,
})
export class BoxViewChildComponent implements OnInit {
	theme: string

	constructor() {}

	ngOnInit() {
		this.randomTheme()
	}

	randomTheme() {
		const themes = ['primary', 'secondary', 'success', 'info', 'danger', 'warning', 'muted']
		this.theme = themes[Math.floor(Math.random() * themes.length)]
	}
}
