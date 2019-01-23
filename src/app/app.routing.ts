import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './core/not-found.component'
import { HomeComponent } from './home.component'

const routes: Routes = [
	// Route par défaut en avant-dernier
	{ path: '', component: HomeComponent },
	// Route wildcard en dernier (rien ne correspond)
	{ path: '**', component: NotFoundComponent },
]

@NgModule({
	// ForRoot pour le routing principal de l'AppModule
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRouting {}
