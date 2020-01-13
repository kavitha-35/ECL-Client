import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-method-search',
  templateUrl: './method-search.component.html',
  styleUrls: ['./method-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodSearchComponent implements OnInit {
  departments: DepartmentModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
