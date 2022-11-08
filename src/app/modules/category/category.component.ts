import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TITLE_CATEGORY } from 'src/app/core/constants/text.const';
import { LearningService } from 'src/app/core/services/learning/learning.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ICategory } from 'src/app/core/models';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
          height: '200px',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          300,
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class CategoryComponent implements OnInit {
  isOpen = false;
  title: string;
  listCategory!: ICategory[];
  constructor(
    // private router: Router,
    private learningService: LearningService
  ) {
    this.title = TITLE_CATEGORY;
  }

  ngOnInit(): void {
    this.learningService.getListCategory().subscribe({
      next: (response: ICategory[]) => {
        this.learningService.setStateDisplay(false);
        this.listCategory = response.filter((category: ICategory) => {
          if (category.estado == true) {
            return category;
          }
          return;
        });
      },
    });
  }

  // setOption() {
  //   this.router.navigate(['/dashboard/options']);
  // }

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
}
