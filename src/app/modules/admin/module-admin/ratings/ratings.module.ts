import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings.component';
import { RatingService } from '../../commons/service/rating.service';

@NgModule({
  declarations: [
    RatingsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RatingService,
  ]
})
export class RatingsModule { }
