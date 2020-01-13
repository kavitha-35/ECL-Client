import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-department-data-list',
  templateUrl: './department-data-list.component.html',
  styleUrls: ['./department-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentDataListComponent implements OnInit {
  @Input() departments: DepartmentModel[];
  @Output() editDepartmentClicked = new EventEmitter();
  @Output() deleteDepartmentClicked = new EventEmitter();
  @Output() viewDepartmentClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  public onEditDepartmentClicked(department: DepartmentModel): void {
    this.editDepartmentClicked.emit(department);
  }

  public onDeleteDepartmentClicked(departmentId: string): void {
    this.deleteDepartmentClicked.emit(departmentId);
  }

  public onViewDepartmentClicked(department: DepartmentModel): void {
    this.viewDepartmentClicked.emit(department);
  }
}
