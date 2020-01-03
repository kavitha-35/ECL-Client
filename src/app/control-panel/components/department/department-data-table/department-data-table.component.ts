import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-department-data-table',
  templateUrl: './department-data-table.component.html',
  styleUrls: ['./department-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentDataTableComponent implements OnInit {
  @Input() departments: DepartmentModel[];
  @Input() isBusy: boolean;
  @Output() editDepartmentClicked = new EventEmitter();
  @Output() deleteDepartmentClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }
  public onEditDepartmentClicked(): void {
    this.editDepartmentClicked.emit();
  }

  public onDeleteDepartmentClicked(): void {
    this.deleteDepartmentClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'departmentname', displayValue: 'Department Name', isSelected: true },
      { columnName: 'departmenttype', displayValue: 'Department Type', isSelected: true },
      { columnName: 'doctorname', displayValue: 'Doctor Name', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
