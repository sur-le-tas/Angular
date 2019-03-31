// Contrairement aux modules ES6 qui est une formalisation de l'encapsulation classique de variables et méthodes,
// un module Angular est:
// - un contexte de compilation de template
// - une exposition d'une API publique
// - une aide à l'injection de dépendance
import { NgModule } from '@angular/core'

// BrowserModule fournit services critiques au rendu sur le navigateur.
// Inclut CommonModule (qui contient les directives communes) mais est dédié à AppModule.
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

// https://angular.io/guide/styleguide#core-feature-module
import { CoreModule } from './core/core.module'

// https://angular.io/guide/styleguide#feature-modules
import { TodoModule } from './todo/todo.module'
import { ContentVsViewModule } from './content-vs-view/content-vs-view.module'

// Routing principal
import { AppRouting } from './app.routing'

// Composants
import { AppComponent } from './app.component'
import { HomeComponent } from './home.component'

import { ServerBaseUrlProvider } from './core/server-base-url.interceptor'

@NgModule({
	// Components et directives du module
	declarations: [AppComponent, HomeComponent],

	// Services du module
	providers: [ServerBaseUrlProvider],

	// Modules injectés (AppModule importe toujours le BrowserModule)
	imports: [BrowserModule, HttpClientModule, CoreModule, TodoModule, ContentVsViewModule, AppRouting],
	// Import du module de routing principal en dernier pour que le wildcard redirect fonctionne https://stackoverflow.com/questions/40015385/

	// Modules, Components et Directives du module que l'on souhaite exposer publiquement à d'autres modules.
	// On peut exporter sans déclarer un component si on ne s'en sert pas dans le module lui-même.
	exports: [],

	// Component root à utiliser comme point d'entrée pour boostraper l'application (seulement AppModule)
	bootstrap: [AppComponent],
})
export class AppModule {}
