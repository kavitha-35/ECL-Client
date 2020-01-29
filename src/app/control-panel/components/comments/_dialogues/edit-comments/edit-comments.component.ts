import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { CommentService } from 'app/control-panel/services/comment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-comments',
  templateUrl: './edit-comments.component.html',
  styleUrls: ['./edit-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCommentsComponent {
  public comments: LookUpModel;

  constructor(
    private readonly _dialogRef: MatDialogRef<EditCommentsComponent>,
    private readonly _commentService: CommentService,
    @Inject(MAT_DIALOG_DATA) data: LookUpModel,
  ) {
    this.comments = data;
  }

  public onEditCommentClicked(comment: NgForm): void {
    comment.form.value.lookupName = 'comment';
    console.log(comment.form.value);
    this._commentService.updateComment(this.comments.lookupId, comment.form.value).subscribe(() => {
      this._dialogRef.close();
    });
  }
}
