import { Component, Inject } from '@angular/core';
import { LogisticModel } from '../../../../models/logistics/logistic.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-logistic-item',
  templateUrl: './add-logistic-item.component.html',
  styleUrls: ['./add-logistic-item.component.scss'],
})
export class AddLogisticItemComponent {
  public logistic           : LogisticModel = {} as LogisticModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: LogisticModel,
    private readonly _dialogRef: MatDialogRef<AddLogisticItemComponent>,
  ) {
    this.logistic = data;
  }

  public onSaveClicked(): void {
    this._dialogRef.close();
  }
}
