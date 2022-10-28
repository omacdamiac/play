import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { UserComponent } from './module-admin/user/user.component';
import { CategoryListComponent } from './module-admin/category-list/category-list.component';
import { RatingsComponent } from './module-admin/ratings/ratings.component';
import { ButtonModule } from 'src/app/commons/components/button/button.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    CategoryListComponent,
    RatingsComponent,
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
  ],
})
export class AdminModule { }
