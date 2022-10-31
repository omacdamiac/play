import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { UserComponent } from './module-admin/user/user.component';
import { CategoryListComponent } from './module-admin/category-list/category-list.component';
import { RatingsComponent } from './module-admin/ratings/ratings.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputModule, SelectModule, ButtonModule } from 'src/app/commons/components';
import { UpdateUserComponent } from './module-admin/update-user/update-user.component';
import { NotImageDirective } from 'src/app/core/directive/not-image.directive';
import { UpdateCategoryComponent } from './module-admin/update-category/update-category.component';
import { UpdateOptionComponent } from './module-admin/update-option/update-option.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    CategoryListComponent,
    RatingsComponent,
    UpdateUserComponent,
    UpdateCategoryComponent,
    UpdateOptionComponent,
    NotImageDirective,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    LoaderModule,
    SidebarMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ButtonModule,
    InputModule,
    SelectModule,
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
