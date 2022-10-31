import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { SelectNsModel } from 'src/app/commons/components/select/model/select-ns.model';
import { ID, LIST_PROFILE } from 'src/app/core/constants/text.const';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  formUser: FormGroup;
  selectRol = new SelectNsModel.SelectClass(
    'Rol',
    'rol',
    true,
    '',
    LIST_PROFILE
  );

  InpId = new InputNsModel.InputClass(
    '',
    '',
    false,
    'id',
    'text'
  );
  InpName = new InputNsModel.InputClass(
    'Nombre',
    'Ingrese nombre',
    true,
    'name',
    'text'
  );
  InpLastName = new InputNsModel.InputClass(
    'Apellidos',
    'Ingrese apellidos',
    false,
    'lastName',
    'text'
  );
  InpUserName = new InputNsModel.InputClass(
    'Usuario',
    'Ingrese usuario',
    true,
    'user',
    'text'
  );
  InpPass = new InputNsModel.InputClass(
    'Clave',
    'Ingrese Clave',
    true,
    'pass',
    'text'
  );
  btnSave = new ButtonNsModel.ButtonClass('Guardar', 'primary', 'borde');
  btnEdit = new ButtonNsModel.ButtonClass('Editar', 'primary', 'borde');
  btnCancel = new ButtonNsModel.ButtonClass('Cancelar', 'primary', 'borde');
  get form() {
    return this.formUser.value;
  }
  get formCtrl() {
    return this.formUser.controls;
  }

  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formUser = new FormGroup({
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
    this.formUser.addControl(ID, new FormControl(this.data.id))
    this.formCtrl.name.setValue(this.data.name);
    this.formCtrl.lastName.setValue(this.data.lastName);
    this.formCtrl.rol.setValue(this.data.rol);
    this.formCtrl.user.setValue(this.data.user);
    this.formCtrl.state.setValue(this.data.state);
    this.formCtrl.pass.setValue(this.data.pass);
  }

  saveUser() {
    this.formUser.markAllAsTouched();
    if (this.formUser.valid) {
      this.dialogRef.close(this.form);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  uploadImage(files: any) {
    console.log(files.target.files);
  }
}
