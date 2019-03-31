import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-navbar',
	template: `
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
			<a class="navbar-brand" routerLink="/">Sur le tas</a>

			<button class="navbar-toggler" type="button" (click)="toggleCollapse()">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" [class.show]="show">
				<div class="navbar-nav">
					<a
						*ngFor="let item of items"
						class="nav-item nav-link"
						[routerLink]="item.link"
						routerLinkActive="active"
						[routerLinkActiveOptions]="{ exact: item.exact }"
					>
						{{ item.name }}
					</a>
					<!--
						- routerLinkActive ajoute classe CSS si route actuelle correspond à routerLink
						- exact:true permet de matcher exactement la route et pas les enfants en plus
					-->
				</div>
			</div>
		</nav>
	`,
})
export class NavbarComponent implements OnInit {
	show = false

	items: { link: string; name: string; exact: boolean }[] = [
		{
			link: '/',
			name: '',
			exact: true,
		},
		{
			link: '/todos',
			name: 'Todos',
			exact: false,
		},
		{
			link: '/content-vs-view',
			name: 'Content/View',
			exact: false,
		},
		{
			link: '/connexion',
			name: 'Connexion',
			exact: false,
		},
	]

	constructor() {}

	ngOnInit() {}

	toggleCollapse() {
		this.show = !this.show
	}
}
