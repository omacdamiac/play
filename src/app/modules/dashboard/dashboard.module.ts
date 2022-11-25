import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { OptionsComponent } from '../options/options.component';
import { LearningService } from 'src/app/core/services/learning/learning.service';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';
import { DialogOptionsHelpComponent } from '../modal/dialog-options-help/dialog-options-help.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ButtonModule } from 'src/app/commons/components';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    OptionsComponent,
    DialogOptionsHelpComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LoaderModule,
    MaterialModule,
    ButtonModule,
  ],
  providers:[
    LearningService
  ]
})
export class DashboardModule { }
