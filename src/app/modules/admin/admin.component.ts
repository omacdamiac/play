import { Component, OnInit } from '@angular/core';
import { BTN_BACK, BTN_OUT } from 'src/app/core/constants/text.const';
import { LearningService } from 'src/app/core/services/learning/learning.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  displayModalBG!: boolean;
  btn: string;
  out: string;

  menu = [
    {
      header: 'CEBE E-LEARNING',
    },
    {
      label: 'Usuarios',
      route: '/admin',
      iconClasses: 'fa fa-rocket',
    },
    {
      label: 'Categorías',
      route: '/admin/listas',
      iconClasses: 'fa fa-rocket',
    },
    {
      label: 'Calificaciones',
      route: '/admin/rating',
      iconClasses: 'fa fa-rocket',
    },
    // {
    //   label: 'Multilevel',
    //   iconClasses: 'fa fa-share',
    //   roles: ['ADMIN', 'EDITOR'],
    //   children: [
    //     {
    //       label: 'Configuration 1',
    //       url: '//google.com',
    //       badges: [
    //         {
    //           label: '1',
    //           classes: 'badge--red',
    //         },
    //       ],
    //     },
    //     {
    //       header: 'Separator',
    //     },
    //     {
    //       label: 'Configuration 2',
    //       children: [
    //         {
    //           label: 'Configuration 1',
    //           url: '//google.com',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: 'Badges',
    //   iconClasses: 'fa fa-star',
    //   url: '//google.com',
    //   badges: [
    //     {
    //       label: 'new',
    //       classes: 'badge--red'
    //     }, {
    //       label: '1',
    //       classes: 'badge--blue'
    //     },
    //   ]
    // },
  ]
  constructor(private learningService: LearningService) {
    this.btn = BTN_BACK;
    this.out = BTN_OUT;
  }

  ngOnInit(): void {
    this.learningService.displayModal$.subscribe({
      next: (response) => {
        this.displayModalBG = response;
      },
    });
  }
}
