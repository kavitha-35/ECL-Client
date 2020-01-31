import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRegisterComponent implements OnInit {

  constructor(
    private readonly _dialogRef: MatDialogRef<AddRegisterComponent>,
    /*private readonly commentService: CommentService,*/
  ) {}

  ngOnInit(): void {}

  public onAddRegisterClicked(registration: NgForm): void {
    /*comment.form.value.lookupName = 'comment';
    console.log(comment.form.value);
    /*this.commentService.addComment(comment.form.value).subscribe((data) => {
      this._dialogRef.close();
    });*/
  }
}
