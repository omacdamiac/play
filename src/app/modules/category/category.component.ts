import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ICategory } from 'src/app/core/models/options.model';
import { LearningService } from 'src/app/core/services/learning/learning.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  options: any;
  constructor(
    private router: Router,
    private learningService: LearningService,
  ) { }

  ngOnInit(): void {
    this.learningService.getOptions().subscribe({
      next: (response: ICategory[]) => {
        console.log(response)
        this.options = response;
      }
    })
  }

  setOption() {
    this.router.navigate(['/dashboard/options'])
  }

}
