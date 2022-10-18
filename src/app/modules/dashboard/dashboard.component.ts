import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BTN_BACK } from 'src/app/core/constants/text.const';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  btn: string;
  constructor(private location: Location) {
    this.btn = BTN_BACK;
  }

  ngOnInit(): void {}

  back() {
    this.location.back();
  }
}
