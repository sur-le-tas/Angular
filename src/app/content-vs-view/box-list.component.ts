import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'box-list',
	template: `
		<box>
			<h3>Foo</h3>
			<button type="button" class="btn btn-primary mt-3">J'aime</button>
		</box>

		<hr />

		<box>
			<h3>Bar</h3>
			<box-content-child (ticker)="logTick($event)"></box-content-child>
			<button type="button" class="btn btn-primary mt-3">J'aime pas</button>
		</box>
	`,
	styles: [],
})
export class BoxListComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	logTick(ticked: boolean) {
		console.log('ticked', ticked)
	}
}
