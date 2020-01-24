import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
