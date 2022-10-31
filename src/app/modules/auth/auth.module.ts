import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { ButtonModule, InputModule } from 'src/app/commons/components';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    RouterModule,
    ButtonModule,
    InputModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
