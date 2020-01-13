import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-method-list-data-table',
  templateUrl: './method-list-data-table.component.html',
  styleUrls: ['./method-list-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  public onEditMethodClicked(): void {
    this.editMethodClicked.emit();
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
      { columnName: 'id', displayValue: 'Method  ID', isSelected: true },
      { columnName: 'code', displayValue: 'Integration Code', isSelected: true },
      { columnName: 'machine', displayValue: 'Machine', isSelected: false },
      { columnName: 'name', displayValue: 'Method Name', isSelected: false },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

}
