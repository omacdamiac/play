import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { SelectNsModel } from 'src/app/commons/components/select/model/select-ns.model';
import { ID, OPTIONS } from 'src/app/core/constants/text.const';
import { ICategory } from 'src/app/core/models';
import { CategoryService } from '../../commons/service/category.service';

@Component({
  selector: 'app-update-option',
  templateUrl: './update-option.component.html',
  styleUrls: ['./update-option.component.scss'],
})
export class UpdateOptionComponent implements OnInit {
  formOption: FormGroup;
  selectCategory = new SelectNsModel.SelectClass(
    'Asigna una categoría',
    'category',
    true,
    ''
  );
  selectLevel = new SelectNsModel.SelectClass(
    'Asignar el nivel',
    'level',
    true,
    '',
    [1, 2]
  );
  inpName = new InputNsModel.InputClass(
    'Nombre de opción',
    'Ingrese nombre a mostrar',
    true,
    'name',
    'text'
  );
  inpImg = new InputNsModel.InputClass(
    'Imagen de opción',
    'Ingrese nombre de la imagen',
    true,
    'img',
    'text'
  );
  btnSave = new ButtonNsModel.ButtonClass('Guardar', 'primary', 'borde');
  btnEdit = new ButtonNsModel.ButtonClass('Editar', 'primary', 'borde');
  btnCancel = new ButtonNsModel.ButtonClass('Cancelar', 'primary', 'borde');
  get form() {
    return this.formOption.value;
  }
  get formCtrl() {
    return this.formOption.controls;
  }
  constructor(
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<UpdateOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formOption = new FormGroup({
      state: new FormControl(false),
    });
  }

  ngOnInit(): void {    
    this.selectCategory.options = this.data.category
    if (this.data) {
      setTimeout(() => {
        this.setForm();
      });
    }
  }

  setForm() {
    this.formOption.addControl(ID, new FormControl(this.data.option.id));
    this.formCtrl.category.setValue(this.data.option.padreId);
    this.formCtrl.name.setValue(this.data.option.name);
    this.formCtrl.img.setValue(this.data.option.img);
    this.formCtrl.state.setValue(this.data.option.state);
  }

  saveOption() {
    this.dialogRef.close(this.form);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
