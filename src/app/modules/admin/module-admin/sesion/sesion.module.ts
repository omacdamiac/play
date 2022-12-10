import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionComponent } from './sesion.component';
import { SesionService } from '../../commons/service/sesion.service';


@NgModule({
  declarations: [
    SesionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SesionModule { }
