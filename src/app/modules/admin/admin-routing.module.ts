import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './module-admin/category-list/category-list.component';
import { RatingsComponent } from './module-admin/ratings/ratings.component';
import { UpdateCategoryComponent } from './module-admin/update-category/update-category.component';
import { UpdateOptionComponent } from './module-admin/update-option/update-option.component';
import { UpdateUserComponent } from './module-admin/update-user/update-user.component';
import { UserComponent } from './module-admin/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: UserComponent, canActivate: [AdminGuard] },
      { path: 'rating', component: RatingsComponent, canActivate: [AdminGuard] },
      { path: 'listas', component: CategoryListComponent, canActivate: [AdminGuard] },
      { path: 'mantenimiento/usuario', component: UpdateUserComponent, canActivate: [AdminGuard] },
      { path: 'mantenimiento/categoria', component: UpdateCategoryComponent, canActivate: [AdminGuard] },
      { path: 'mantenimiento/opciones', component: UpdateOptionComponent, canActivate: [AdminGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
