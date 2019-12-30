import { Component, Input } from '@angular/core';
import { WorkSheetModel } from '../../../../models/work-sheet/work-sheet.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-work-sheets-table',
  templateUrl: './work-sheets-table.component.html',
  styleUrls: ['./work-sheets-table.component.scss'],
})
export class WorkSheetsTableComponent {
  @Input() public workSheetList: WorkSheetModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Id', isSelected: true },
      { columnName: 'patientName', displayValue: 'Patient Name', isSelected: true },
      { columnName: 'date', displayValue: 'Date', isSelected: true },
      { columnName: 'clinic', displayValue: 'Clinic', isSelected: true },
      { columnName: 'testCode', displayValue: 'Test Code', isSelected: true },
      { columnName: 'testName', displayValue: 'Test Name', isSelected: true },
      { columnName: 'comment', displayValue: 'Comment', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
