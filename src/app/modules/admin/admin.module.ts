import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './module-admin/user/user.component';
import {MatInputModule} from '@angular/material/input';
import { CategoryListComponent } from './module-admin/category-list/category-list.component';
import { RatingsComponent } from './module-admin/ratings/ratings.component';


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
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    SidebarMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AdminModule { }
