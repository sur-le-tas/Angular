import {
	Component,
	OnInit,
	AfterContentInit,
	ContentChild,
	ContentChildren,
	QueryList,
	ViewChild,
	AfterViewInit,
	ViewChildren,
	ChangeDetectorRef,
	ElementRef,
	Renderer2,
} from '@angular/core'
import { BoxContentChildComponent } from './box-content-child.component'
import { BoxViewChildComponent } from './box-view-child.component'

@Component({
	// tslint:disable-next-line: component-selector
	selector: 'box',
	template: `
		<div class="card">
			<div class="card-header">
				<!-- Projection de slot fonctionne comme querySelector -->
				<ng-content select="h3"></ng-content>
			</div>

			<div class="card-body">
				<p #paragraph>Contenu commun.</p>

				<ng-content select="box-content-child"></ng-content>

				<box-view-child hidden="!ticked"></box-view-child>
			</div>

			<div class="card-footer">
				<ng-content select="button[type=button]"></ng-content>
			</div>
		</div>
	`,
	styles: [],
})
export class BoxComponent implements OnInit, AfterContentInit, AfterViewInit {
	constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

	ticked: boolean

	@ContentChild(BoxContentChildComponent) contentChild: BoxContentChildComponent
	@ContentChildren(BoxContentChildComponent) contentChildren: QueryList<BoxContentChildComponent>

	// Appelé 'view child' car existe dans la vue du composant lui-même et n'est pas projeté
	@ViewChild(BoxViewChildComponent) viewChild: BoxViewChildComponent // accessible dans AfterContentInit
	@ViewChildren(BoxViewChildComponent) viewChildren: QueryList<BoxViewChildComponent> // NON accessible dans AfterContentInit car liste dynamique

	// Accès aux éléments référencés de la page
	@ViewChild('paragraph') paragraph: ElementRef<HTMLElement>

	ngOnInit() {}

	ngAfterContentInit() {
		// Si je veux changer la donnée d'un viewchild, je dois le faire ici et non pas après que la vue soit initialisée,
		// car cela ne respecterait pas la logique unidirectionnelle imposée par la détection de changement d'angular.
		if (this.viewChild) {
			this.viewChild.randomTheme()
		}

		if (this.contentChild) {
			this.contentChild.ticker.subscribe((ticked: boolean) => {
				this.ticked = ticked
			})
		}
	}

	ngAfterViewInit() {
		if (this.viewChildren) {
			this.viewChildren.forEach((child) => child.randomTheme())
			// Je dois appliquer la détection de changement d'angular si je modifie la vue après initialisation.
			this.cd.detectChanges()
		}

		// Accès au méthodes du DOM limitera l'application à la plateforme Web.
		this.paragraph.nativeElement.classList.add('text-primary')
		// Le renderer permet de modifier les éléments de manière agnostique.
		this.renderer.addClass(this.paragraph.nativeElement, 'bg-light')
	}
}
