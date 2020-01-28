import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-method-list-data-table',
  templateUrl: './method-list-data-table.component.html',
  styleUrls: ['./method-list-data-table.component.scss'],
})
export class MethodListDataTableComponent implements OnInit  {
  @Input() method : MethodModel[];
  @Input() isBusy: boolean;
  @Output() editMethodClicked = new EventEmitter();
  @Output() deleteMethodClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditMethodClicked(method: MethodModel): void {
    this.editMethodClicked.emit(method);
  }

  public onDeleteMethodClicked(): void {
    this.deleteMethodClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Clinic ID', isSelected: true },
      { columnName: 'name', displayValue: 'Method Name', isSelected: true },
      { columnName: 'department', displayValue: 'Department Name', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

}
