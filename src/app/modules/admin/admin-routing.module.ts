import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      { path: '', component: UserComponent },
      { path: 'rating', component: RatingsComponent },
      { path: 'listas', component: CategoryListComponent },
      { path: 'mantenimiento/usuario', component: UpdateUserComponent },
      { path: 'mantenimiento/categoria', component: UpdateCategoryComponent },
      { path: 'mantenimiento/opciones', component: UpdateOptionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
