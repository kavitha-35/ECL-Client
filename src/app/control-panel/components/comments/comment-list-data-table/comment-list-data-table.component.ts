import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comment-list-data-table',
  templateUrl: './comment-list-data-table.component.html',
  styleUrls: ['./comment-list-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
