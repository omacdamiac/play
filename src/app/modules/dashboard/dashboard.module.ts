import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { OptionsComponent } from '../options/options.component';
import { LearningService } from 'src/app/core/services/learning/learning.service';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    OptionsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LoaderModule,
  ],
  providers:[
    LearningService
  ]
})
export class DashboardModule { }
