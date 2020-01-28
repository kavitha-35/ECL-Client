import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
/**import { CommentService } from 'app/control-panel/services/method.service';**/


@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentsComponent implements OnInit {

  constructor(
    private readonly _dialogRef: MatDialogRef<AddCommentsComponent>,
   /**  private readonly _methodService: CommentService**/
    ) { }

    ngOnInit(): void {
    }

  public onAddCommentClicked(comment: NgForm): void {
   console.log(comment.form.value);
  /** this._methodService.addComment(comment.form.value).subscribe((data) => {
    this._dialogRef.close();
  });**/
  }
}

