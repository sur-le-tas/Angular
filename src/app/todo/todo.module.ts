import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { TodoListComponent } from './todo-list.component'
import { TodoDetailsComponent } from './todo-details.component'
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form.component'

const routes: Routes = [{ path: 'todos', component: TodoListComponent }]

/**
 * https://angular.io/guide/styleguide#feature-modules
 */
@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes)],
	declarations: [TodoListComponent, TodoDetailsComponent, TodoFormComponent],
	exports: [],
})
export class TodoModule {}
