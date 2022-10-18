import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { LearningService } from 'src/app/core/services/learning/learning.service';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LearningService,
  ]
})
export class CategoryModule { }
