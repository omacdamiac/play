import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { ID, OPTIONS } from 'src/app/core/constants/text.const';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  formCategory: FormGroup;
  InpName = new InputNsModel.InputClass(
    'Nombre',
    'Ingrese nombre',
    true,
    'name',
    'text'
  );
  btnSave = new ButtonNsModel.ButtonClass('Guardar', 'primary', 'borde');
  btnEdit = new ButtonNsModel.ButtonClass('Editar', 'primary', 'borde');
  btnCancel = new ButtonNsModel.ButtonClass('Cancelar', 'primary', 'borde');
  get form() {
    return this.formCategory.value;
  }
  get formCtrl() {
    return this.formCategory.controls;
  }
  constructor(
    public dialogRef: MatDialogRef<UpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formCategory = new FormGroup({
      state: new FormControl(false),
    });
  }

  ngOnInit(): void {        
    if(this.data) {
      setTimeout(() => {
        this.setForm();
      });
    }
  }

  setForm() {
    this.formCategory.addControl(ID, new FormControl(this.data.id))
    this.formCategory.addControl(OPTIONS, new FormControl(this.data.options === [] ? [] : this.data.options))

    this.formCtrl.name.setValue(this.data.name);
    this.formCtrl.state.setValue(this.data.state);
  }

  saveCategory() {
    this.formCategory.markAllAsTouched();
    if (this.formCategory.valid) {
      this.dialogRef.close(this.form);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
