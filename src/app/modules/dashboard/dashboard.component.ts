import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UTILS } from 'src/app/commons/utils/utils';
import { BTN_BACK, BTN_OUT, LINK_PANEL } from 'src/app/core/constants/text.const';
import { IUser } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LearningService } from 'src/app/core/services/learning/learning.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  btn: string;
  out: string;
  user!: string;
  rol!: string;
  admin: string;
  displayModalBG!: boolean;
  constructor(
    private location: Location,
    private learningService: LearningService,
    private authService: AuthService,
    ) {
      this.btn = BTN_BACK;
      this.out = BTN_OUT;
      this.admin = LINK_PANEL;
    }
  
  ngOnInit(): void {
    this.setData();
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

  private setData(): void {
    UTILS.getUser(this.authService.getToken());
    // const userData = this.decode(String(this.authService.getToken()));
    this.user = UTILS.getUser(this.authService.getToken()).user;
    this.rol = UTILS.getUser(this.authService.getToken()).rol;
  }


}
