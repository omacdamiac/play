import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  categorias = [
    {
      id: 1,
      name: 'frutas',
      options: [
        {
          id: 1,
          name: 'manzana',
          img: 'manzana',
        },
        {
          id: 2,
          name: 'platano',
          img: 'platano',
        },
        {
          id: 3,
          name: 'papaya',
          img: 'papaya',
        },
        {
          id: 4,
          name: 'fresa',
          img: 'fresa',
        },
        {
          id: 5,
          name: 'naranja',
          img: 'naranja',
        },
      ],
    },
    {
      id: 2,
      name: 'animales',
      options: [
        {
          id: 1,
          name: 'León',
          img: 'leon',
        },
        {
          id: 2,
          name: 'Elefante',
          img: 'elefante',
        },
        {
          id: 3,
          name: 'Jirafa',
          img: 'jirafa',
        },
        {
          id: 4,
          name: 'Mono',
          img: 'mono',
        },
        {
          id: 5,
          name: 'Oso',
          img: 'oso',
        },
      ],
    },
    {
      id: 3,
      name: 'numeros',
      options: [
        {
          id: 1,
          name: 'Dos',
          img: 'dos',
        },
        {
          id: 2,
          name: 'Cuatro',
          img: 'cuatro',
        },
        {
          id: 3,
          name: 'Uno',
          img: 'uno',
        },
        {
          id: 4,
          name: 'Cinco',
          img: 'cinco',
        },
        {
          id: 5,
          name: 'Tres',
          img: 'tres',
        },
      ],
    },
    {
      id: 4,
      name: 'transporte',
      options: [
        {
          id: 1,
          name: 'Auto',
          img: 'auto',
        },
        {
          id: 2,
          name: 'Avión',
          img: 'avion',
        },
        {
          id: 3,
          name: 'Tren',
          img: 'tren',
        },
        {
          id: 4,
          name: 'Barco',
          img: 'barco',
        },
        {
          id: 5,
          name: 'Moto',
          img: 'moto',
        },
      ],
    },
  ];

  category = of(this.categorias);
  display: boolean;
  respuesta!: boolean;
  current: any;
  categoriaCurrent!: any;
  constructor(private route: ActivatedRoute) {
    this.display = false;
    this.current = this.route.snapshot.paramMap.get('item');
  }

  ngOnInit(): void {
    this.category.subscribe({
      next: (response: any) => {
         response.filter((e: any) => {
          if(e.name === this.current) {
            this.categoriaCurrent = e.options;
          }
        })
      },
    });
    console.log(this.categoriaCurrent);
  }

  validar(value: boolean): void {
    console.log(value);
    this.display = true;
    if (value) {
      this.respuesta = true;
    } else {
      this.respuesta = false;
    }
  }

  next() {
    this.display = false;
  }
}
