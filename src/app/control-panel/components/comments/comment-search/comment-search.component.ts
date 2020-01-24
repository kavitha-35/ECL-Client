import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comment-search',
  templateUrl: './comment-search.component.html',
  styleUrls: ['./comment-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
