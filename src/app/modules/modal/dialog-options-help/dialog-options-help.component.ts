import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';

@Component({
  selector: 'app-dialog-options-help',
  templateUrl: './dialog-options-help.component.html',
  styleUrls: ['./dialog-options-help.component.scss']
})
export class DialogOptionsHelpComponent implements OnInit {

  btnGo = new ButtonNsModel.ButtonClass(
    'Iniciar',
    'primary',
    'borde'
  );
  
  constructor(
    public dialogRef: MatDialogRef<DialogOptionsHelpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}



  ngOnInit(): void {
    console.log(this.data);
  }

  go() {
    this.dialogRef.close();
  }

}
