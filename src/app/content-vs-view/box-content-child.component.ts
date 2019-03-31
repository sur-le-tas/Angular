import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'box-content-child',
	template: `
		<div class="form-check">
			<input class="form-check-input" type="checkbox" id="tick" (change)="ticker.emit($event.target.checked)" />
			<label class="form-check-label" for="tick">Cocher</label>
		</div>
	`,
	styles: [],
})
export class BoxContentChildComponent implements OnInit {
	@Output()
	ticker = new EventEmitter<boolean>()

	constructor() {}

	ngOnInit() {}
}
