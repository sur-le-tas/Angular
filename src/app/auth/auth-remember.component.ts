import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
	selector: 'auth-remember',
	template: `
		<div class="custom-control custom-checkbox">
			<input type="checkbox" class="custom-control-input" id="remember" (change)="checker.emit($event.target.checked)" />
			<label class="custom-control-label" for="remember">Se souvenir de moi</label>
		</div>
	`,
	styles: [
		`
			label {
				user-select: none;
			}
		`,
	],
})
export class AuthRememberComponent implements OnInit {
	@Output()
	checker = new EventEmitter<boolean>()

	constructor() {}

	ngOnInit() {}
}
