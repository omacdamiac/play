import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BTN_BACK, BTN_OUT } from 'src/app/core/constants/text.const';
import { LearningService } from 'src/app/core/services/learning/learning.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  btn: string;
  out: string;
  displayModalBG!: boolean;
  constructor(
    private location: Location,
    private learningService: LearningService,
    ) {
      this.btn = BTN_BACK;
      this.out = BTN_OUT;
    }
  
  ngOnInit(): void {
    this.learningService.displayModal$.subscribe({
      next: response => {
        this.displayModalBG = response;
      }
    });
   
  }
  ngOnChanges() {
    console.log(this.displayModalBG);
  }

  back() {
    this.location.back();
  }
}
