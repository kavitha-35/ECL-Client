import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';


@Component({
  selector: 'app-edit-comments',
  templateUrl: './edit-comments.component.html',
  styleUrls: ['./edit-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCommentsComponent  {

  departments: DepartmentModel[];
  constructor(private readonly _dialogRef: MatDialogRef<EditCommentsComponent>) { }

  public onEditCommentClicked(): void {
    this._dialogRef.close();
  }
}
