import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

/**
 * https://angular.io/guide/styleguide#shared-feature-module
 */
@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	declarations: [],
	exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
