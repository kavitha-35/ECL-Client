import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-reference-range',
  templateUrl: './add-reference-range.component.html',
  styleUrls: ['./add-reference-range.component.scss']
})
export class AddReferenceRangeComponent {

  constructor(private readonly _dialogRef: MatDialogRef<AddReferenceRangeComponent>) { }

  public onAddReferenceRangeClicked(): void {
    this._dialogRef.close();
  }
}
