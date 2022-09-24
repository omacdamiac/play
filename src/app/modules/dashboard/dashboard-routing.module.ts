import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { OptionsComponent } from '../options/options.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{path: '', component: DashboardComponent,
children: [
  {path:'', component: CategoryComponent},
  {path:'categoria/:item', component: OptionsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
