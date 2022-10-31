import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BTN_NEXT,
  BTN_NOT,
  BTN_YES,
  LINK_GO_MAIN,
} from 'src/app/core/constants/text.const';
import { ICategory, IOptions } from 'src/app/core/models';
import { IOptionsData } from 'src/app/core/models/options.model';
import { LearningService } from 'src/app/core/services/learning/learning.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  btn_next: string;
  btn_yes: string;
  btn_not: string;
  link_main: string;
  display: boolean;
  displayCongratulation: boolean;
  respuesta!: boolean;
  id: any;
  categoriaCurrent!: IOptions[];
  currentItem: any;
  constructor(
    private route: ActivatedRoute,
    private learningService: LearningService
  ) {
    this.display = false;
    this.displayCongratulation = false;
    this.id = this.route.snapshot.paramMap.get('item');
    this.btn_next = BTN_NEXT;
    this.btn_yes = BTN_YES;
    this.btn_not = BTN_NOT;
    this.link_main = LINK_GO_MAIN;
  }

  ngOnInit(): void {
    this.learningService.getOption(this.id).subscribe({
      next: (response: ICategory) => {
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

  validate(item: ICategory, value: boolean | null): void {
    console.log(this.categoriaCurrent);
    this.categoriaCurrent.filter((element: IOptions) => {
      if (element.id === item.id) {
        this.removeItemFromArr(this.categoriaCurrent, element);
      }
    });
    const max = this.categoriaCurrent.length;
    console.log(max);

    const data = { ...item, ...{ answer: value } };
    this.validateOption(data);

    if (max === 0) {
      this.learningService.clearState();
      this.displayCongratulation = true;
      this.learningService.setStateDisplay(true);
    } else {
      if (value === null) {
        this.display = false;
        this.nextTo();
      } else if (value) {
        this.learningService.setStateDisplay(true);
        this.display = true;
        this.respuesta = true;
      } else {
        this.learningService.setStateDisplay(true);
        this.display = true;
        this.respuesta = false;
      }
    }
  }

  nextTo() {
    this.currentItem = this.updateRandomImage(0);
    this.display = false;
    this.learningService.setStateDisplay(false);
  }

  validateOption(data: any) {
    switch (Number(data.id)) {
      case 2:
        this.learningService.setState({ item2: data });
        break;
      case 3:
        this.learningService.setState({ item3: data });
        break;
      case 4:
        this.learningService.setState({ item4: data });
        break;
      case 5:
        this.learningService.setState({ item5: data });
        break;

      default:
        this.learningService.setState({ item: data });
        break;
    }

    console.log(this.learningService.getState());
  }

  removeItemFromArr(arr: IOptions[], item: IOptions) {
    var i = arr.indexOf(item);
    arr.splice(i, 1);
  }

  // ngOnDestroy() {
  //   this.learningService.options.unsubscribe();
  // }
}
