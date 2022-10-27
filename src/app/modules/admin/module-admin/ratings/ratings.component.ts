import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  ratings!: any
  list = [0,1]
  constructor() {
    this.ratings = [
      {id: 1, nombre: 'Henry', perfil: 'Administrador', estado: 1},
      {id: 2, nombre: 'Damiac', perfil: 'Administrador', estado: 1},
    ];

  }
  ngOnInit(): void {
  }

}
