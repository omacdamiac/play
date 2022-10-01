import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ICategory, IOptions } from 'src/app/core/models/options.model';
import { LearningService } from 'src/app/core/services/learning/learning.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  display: boolean;
  respuesta!: boolean;
  id: any;
  categoriaCurrent!: any;
  currentItem: any;
  constructor(
    private route: ActivatedRoute,
    private learningService: LearningService
  ) {
    this.display = false;
    this.id = this.route.snapshot.paramMap.get('item');
  }

  ngOnInit(): void {
    this.getCategory();
    setTimeout(() => {
      console.log(this.currentItem);
      
    }, 2000);
  }

  getCategory() {
    this.learningService.getOption(this.id).subscribe({
      next: (response: ICategory) => {
        console.log(response.options);
        this.categoriaCurrent = response.options;
        this.currentItem = this.updateRandomImage();
      },
    });
  }

  updateRandomImage(n?: number) {
    const r =
      Math.floor(Math.random() * (this.categoriaCurrent.length - 1)) +
      (n === undefined ? 0 : n);
    return this.categoriaCurrent[r];
  }

  validar(value: boolean): void {
    console.log(value);
    this.display = true;
    if (value) {
      this.respuesta = true;
    } else {
      this.respuesta = false;
    }

    this.learningService.setState({
      item1:{
        id: '1',
        name: "Auto",
        img: "auto"
    }

    }

      )


  console.log(this.learningService.getState())
  
  
  }

  nextTo() {
    this.currentItem = this.updateRandomImage(1);
    this.display = false;
  }
}
