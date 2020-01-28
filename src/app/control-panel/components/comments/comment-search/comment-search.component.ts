import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-comment-search',
  templateUrl: './comment-search.component.html',
  styleUrls: ['./comment-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentSearchComponent implements OnInit {
  departments: DepartmentModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
