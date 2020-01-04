import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-method',
  templateUrl: './edit-method.component.html',
  styleUrls: ['./edit-method.component.scss'],
})
export class EditMethodComponent {
  constructor(private readonly _dialogRef: MatDialogRef<EditMethodComponent>) { }

  public onEditMethodClicked(): void {
    this._dialogRef.close();
  }
}
