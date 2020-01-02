import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-department-search',
  templateUrl: './department-search.component.html',
  styleUrls: ['./department-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
