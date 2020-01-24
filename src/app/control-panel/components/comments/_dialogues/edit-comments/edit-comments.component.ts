import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-comments',
  templateUrl: './edit-comments.component.html',
  styleUrls: ['./edit-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
