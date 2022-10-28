import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';
import { CategoryService } from '../../commons/service/category.service';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CategoryService,
  ]
})
export class CategoryListModule { }
