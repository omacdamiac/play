import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
  ],
  exports: [
    ItemComponent
  ]
})
export class ItemModule { }
