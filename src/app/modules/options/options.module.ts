import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options.component';
import { DialogOptionsHelpComponent } from '../modal/dialog-options-help/dialog-options-help.component';

@NgModule({
  declarations: [
    OptionsComponent,
    DialogOptionsHelpComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class OptionsModule { }
