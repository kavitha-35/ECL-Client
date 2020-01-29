import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from 'app/control-panel/models/method/comment.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-comment-list-data-table',
  templateUrl: './comment-list-data-table.component.html',
  styleUrls: ['./comment-list-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentListDataTableComponent implements OnInit {
  @Input() comment : CommentModel[];
  @Input() isBusy: boolean;
  @Output() editCommentClicked = new EventEmitter();
  @Output() deleteCommentClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditCommentClicked(): void {
    this.editCommentClicked.emit();
  }

  public onDeleteCommentClicked(): void {
    this.deleteCommentClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Comment ID', isSelected: true },
      { columnName: 'name', displayValue: 'Comment Name', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

}

