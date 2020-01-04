import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-method',
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMethodComponent {


  constructor(private readonly _dialogRef: MatDialogRef<AddMethodComponent>) { }

  public onAddMethodClicked(): void {
    this._dialogRef.close();
  }
}
