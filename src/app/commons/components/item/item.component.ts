import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceOficios } from '../../models/oficio';
import { ButtonNsModel } from '../button/model/button-ns.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item!: InterfaceOficios.OFICIO
  @Output() miEvento = new EventEmitter<InterfaceOficios.OFICIO>()
  req: any
  buttonEdit = new ButtonNsModel.ButtonClass('Editar', 'primary')
  buttonDelete = new ButtonNsModel.ButtonClass('Eliminar', 'primary')

  constructor() {}

  ngOnInit(): void {
    this.req = {
      id: this.item.id,
      description: this.item.description,
      name: this.item.name,
      category: this.item.category,
    }
  }
  ejecutarEvento(e: string) {
    let datos = {...this.item, ...{accion: e}}
    this.miEvento.emit(datos)    
  }
}
