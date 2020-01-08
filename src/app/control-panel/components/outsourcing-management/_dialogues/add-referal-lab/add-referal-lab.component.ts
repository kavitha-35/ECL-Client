import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-referal-lab',
  templateUrl: './add-referal-lab.component.html',
  styleUrls: ['./add-referal-lab.component.scss']
})
export class AddReferalLabComponent {

  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferalLabComponent>,
    ) { }

  public onAddReferalLabClicked(): void {
    this._dialogRef.close();
  }
}
