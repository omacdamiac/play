import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UsersService } from '../../commons/service/users.service';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    UsersService,
  ]
})
export class UserModule { }
