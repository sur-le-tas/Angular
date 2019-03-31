import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { BoxListComponent } from './box-list.component'
import { BoxComponent } from './box.component'
import { Routes, RouterModule } from '@angular/router'
import { BoxContentChildComponent } from './box-content-child.component'
import { BoxViewChildComponent } from './box-view-child.component'

const routes: Routes = [{ path: 'content-vs-view', component: BoxListComponent }]

@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes)],
	declarations: [BoxListComponent, BoxComponent, BoxContentChildComponent, BoxViewChildComponent],
})
export class ContentVsViewModule {}
