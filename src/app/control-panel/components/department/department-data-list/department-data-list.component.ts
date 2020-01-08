import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-department-data-list',
  templateUrl: './department-data-list.component.html',
  styleUrls: ['./department-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentDataListComponent implements OnInit {
  @Input() departments: DepartmentModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
