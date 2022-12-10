import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UTILS } from 'src/app/commons/utils/utils';
import {
  BTN_NEXT,
  BTN_NOT,
  BTN_YES,
  LINK_GO_MAIN,
} from 'src/app/core/constants/text.const';
import { ICategory, IOptions, IRating } from 'src/app/core/models';
import { IOptionsData } from 'src/app/core/models/options.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LearningService } from 'src/app/core/services/learning/learning.service';
import { DialogOptionsHelpComponent } from '../modal/dialog-options-help/dialog-options-help.component';

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
    private learningService: LearningService,
    private authService: AuthService,
    public dialog: MatDialog
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
    // this.learningService.getListCategory().pipe(
    //   distinctUntilChanged(),
    //   switchMap((value: any) => this.learningService.getOption()
    // )).subscribe(val => console.log(val)
    // )

    this.learningService.getOption().subscribe({
      next: (response: IOptions[]) => {
        console.log(response);

        this.categoriaCurrent = response.filter((option: any) => {
          if (
            option.padreId === Number(this.id) ||
            Number(option.padreId) === Number(this.id)
          ) {
            return option;
          }
        });
        console.log(this.categoriaCurrent);

        this.currentItem = this.updateRandomImage();
        this.openDialog(this.categoriaCurrent);
      },
    });
  }

  openDialog(datos: any): void {
    const dialogRef = this.dialog.open(DialogOptionsHelpComponent, {
      width: '500px',
      data: datos,
      disableClose: true,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  updateRandomImage(n?: number) {
    const r =
      Math.floor(Math.random() * (this.categoriaCurrent.length - 1)) +
      (n === undefined ? 0 : n);
    return this.categoriaCurrent[r];
  }

  validate(item: ICategory, value: boolean | null): void {
    this.categoriaCurrent.filter((element: IOptions) => {
      if (element.id === item.id) {
        this.removeItemFromArr(this.categoriaCurrent, element);
      }
    });
    const count = this.categoriaCurrent.length;

    const data = { ...item, ...{ answer: value } };
    this.validateOption(data, count);

    if (count === 0) {
      this.learningService
        .setRating(this.sendRequest(this.learningService.getState()))
        .subscribe();

      // this.learningService.clearState();

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

  validateOption(data: any, count: number) {
    const id = count + 1;
    switch (id) {
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
  }

  removeItemFromArr(arr: IOptions[], item: IOptions) {
    var i = arr.indexOf(item);
    arr.splice(i, 1);
  }

  sendRequest(obj: any): IRating {
    const sendData = {
      category: Number(this.id),
      // category: this.id ? this.setCategory().nombre : '',
      user: UTILS.getUser(this.authService.getToken()).user,
      points: UTILS.points(obj),
      answer: obj,
    };
    return sendData;
  }
  // myCategory: any;
  // setCategory(): any {
  //   this.learningService.getListCategory().subscribe({
  //     next: (response) => {
  //       return response.filter((cat: any) => {
  //         if (cat.id == this.id || cat.id == Number(this.id)) {
  //           console.log(cat);
            
  //           return cat;
  //         }
  //       });
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   this.learningService.options.unsubscribe();
  // }
}
