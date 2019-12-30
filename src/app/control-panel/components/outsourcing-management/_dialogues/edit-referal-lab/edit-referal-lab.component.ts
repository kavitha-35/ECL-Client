import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-referal-lab',
  templateUrl: './edit-referal-lab.component.html',
  styleUrls: ['./edit-referal-lab.component.scss']
})
export class EditReferalLabComponent {

  constructor(private readonly _dialogRef: MatDialogRef<EditReferalLabComponent>) { }

  public onEditReferalLabClicked(): void {
    this._dialogRef.close();
  }
}
