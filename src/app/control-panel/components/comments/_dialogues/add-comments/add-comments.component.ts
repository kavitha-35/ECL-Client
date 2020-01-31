import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CommentService } from 'app/control-panel/services/comment.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCommentsComponent implements OnInit {
  constructor(
    private readonly _dialogRef: MatDialogRef<AddCommentsComponent>,
    private readonly commentService: CommentService,
  ) {}

  ngOnInit(): void {}

  public onAddCommentClicked(comment: NgForm): void {
    comment.form.value.lookupName = 'comment';
    console.log(comment.form.value);
    this.commentService.addComment(comment.form.value).subscribe((data) => {
      this._dialogRef.close();
    });
  }
}
