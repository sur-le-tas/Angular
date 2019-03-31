import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
	selector: 'app-todo-form',
	template: `
		<form (ngSubmit)="create()" [formGroup]="todoForm" class="w-75 mx-auto">
			<div class="form-group">
				<label>Texte</label>
				<input
					type="text"
					formControlName="text"
					class="form-control"
					[class.is-invalid]="textControl.invalid && textControl.touched"
					[class.is-valid]="textControl.valid && textControl.touched"
				/>
				<!-- formControlName est un raccourci ciblant une clé du formGroup, évite de faire: [formControl]="textControl" -->
			</div>

			<button type="submit" class="btn btn-primary" [disabled]="todoForm.invalid">Connexion</button>
		</form>
	`,
	styles: [],
})
export class TodoFormComponent implements OnInit {
	todoForm: FormGroup

	// Expose les controls individuels pour éviter d'avoir à taper tout le chemin
	get textControl() {
		return this.todoForm.get('text') as FormControl
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		// FormBuilder permet de créer plus simplement des formulaires réactifs
		this.todoForm = this.fb.group({
			text: ['', Validators.required],
		})
	}

	create() {
		if (this.todoForm.invalid) return
	}
}
