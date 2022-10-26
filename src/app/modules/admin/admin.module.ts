import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';
import { SidebarMenuModule } from 'angular-sidebar-menu';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoaderModule,
    SidebarMenuModule,
  ]
})
export class AdminModule { }
