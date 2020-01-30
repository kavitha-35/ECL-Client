import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, PageEvent, MatDialogConfig } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { AddCommentsComponent } from './_dialogues/add-comments/add-comments.component';
import { take } from 'rxjs/operators';
import { EditCommentsComponent } from './_dialogues/edit-comments/edit-comments.component';
import { CommentModel } from 'app/control-panel/models/method/comment.model';
import { MethodService } from 'app/control-panel/services/method.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { CommentService } from 'app/control-panel/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public comments: LookUpModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingComments: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _commentService: CommentService,
    private readonly cRef: ChangeDetectorRef,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.getAllComment();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddCommentButtonClicked(): void {
    this._matDialog
      .open(AddCommentsComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllComment();
      });
  }

  public onEditCommentClicked(comment: CommentModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      autoFocus: false,
      data: comment,
    };
    console.log(comment);
    this._matDialog
      .open(EditCommentsComponent, matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getAllComment();
      });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public getAllComment(): void {
    this.isFetchingComments = true;
    this._commentService.getAllComments().subscribe((data) => {
      this.comments = data;
      console.log(data);
      this.isFetchingComments = false;
    });
  }

  public onDeleteCommentClicked(commentId: string): void {
    this._commentService.deleteComment(commentId).subscribe((data) => {
      this.getAllComment();
    });
  }
}
