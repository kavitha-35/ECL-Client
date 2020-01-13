import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-edit-method',
  templateUrl: './edit-method.component.html',
  styleUrls: ['./edit-method.component.scss'],
})
export class EditMethodComponent {
  departments: DepartmentModel[];
  constructor(private readonly _dialogRef: MatDialogRef<EditMethodComponent>) { }

  public onEditMethodClicked(): void {
    this._dialogRef.close();
  }
}
