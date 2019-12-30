import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-reference-range',
  templateUrl: './edit-reference-range.component.html',
  styleUrls: ['./edit-reference-range.component.scss']
})
export class EditReferenceRangeComponent {

  constructor(private readonly _dialogRef: MatDialogRef<EditReferenceRangeComponent>) { }

  public onEditReferenceRangeClicked(): void {
    this._dialogRef.close();
  }
}
