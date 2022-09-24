import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { OptionsComponent } from '../options/options.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    OptionsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
