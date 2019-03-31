import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { NavbarComponent } from './navbar.component'

// Je dois importer routerModule pour me servir de ses directives :
// https://angular.io/api/router#directives
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './not-found.component'

/**
 * https://angular.io/guide/styleguide#core-feature-module
 */
@NgModule({
	declarations: [NavbarComponent, NotFoundComponent],
	imports: [CommonModule, RouterModule],
	exports: [NavbarComponent],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		// https://angular.io/guide/styleguide#prevent-re-import-of-the-core-module
		if (parentModule) throw new Error('CoreModule est déjà chargé')
	}
}
