import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-comments',
  templateUrl: './edit-comments.component.html',
  styleUrls: ['./edit-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditCommentsComponent  {

  constructor(private readonly _dialogRef: MatDialogRef<EditCommentsComponent>) { }

  public onEditCommentClicked(): void {
    this._dialogRef.close();
  }
}
