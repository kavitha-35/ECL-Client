import { Component, Input } from '@angular/core';
import { CaseModel } from '../../../../models/case/case.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-case-table',
  templateUrl: './case-table.component.html',
  styleUrls: ['./case-table.component.scss']
})
export class CaseTableComponent {
  @Input() public caseList                : CaseModel[];
  public displayedColumns                 : string[];
  public filteredColumns                  : GridColumnModel[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.displayedColumns = ['id', 'name', 'email', 'organization', 'reportedBy', 'rootCause', 'status', 'action'];
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Id', isSelected: true },
      { columnName: 'name', displayValue: 'Name', isSelected: true },
      { columnName: 'email', displayValue: 'Email', isSelected: true },
      { columnName: 'organization', displayValue: 'Organization', isSelected: true },
      { columnName: 'reportedBy', displayValue: 'Reported By', isSelected: true },
      { columnName: 'rootCause', displayValue: 'Root Cause', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
