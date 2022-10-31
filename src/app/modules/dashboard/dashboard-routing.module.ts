import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { CategoryComponent } from '../category/category.component';
import { OptionsComponent } from '../options/options.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{path: '', component: DashboardComponent,
children: [
  {path:'', component: CategoryComponent, canActivate: [AdminGuard]},
  {path:'category/:item', component: OptionsComponent, canActivate: [AdminGuard]}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
