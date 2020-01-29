import { Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentListComponent implements OnInit {

  @Input() comment: CommentListComponent[];
  constructor() {}

  ngOnInit(): void {}
}

