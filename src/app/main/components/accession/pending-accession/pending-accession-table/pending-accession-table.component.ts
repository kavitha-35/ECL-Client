import { Component, Input } from '@angular/core';

import { LogisticModel } from '../../../../models/logistics/logistic.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-pending-accession-table',
  templateUrl: './pending-accession-table.component.html',
  styleUrls: ['./pending-accession-table.component.scss'],
})
export class PendingAccessionTableComponent {
  @Input() public logisticsCollections: LogisticModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Id', isSelected: true },
      { columnName: 'clinic', displayValue: 'Clinic', isSelected: true },
      { columnName: 'calledBy', displayValue: 'Called By', isSelected: true },
      { columnName: 'driver', displayValue: 'Driver', isSelected: true },
      { columnName: 'scheduledOn', displayValue: 'Scheduled On', isSelected: true },
      { columnName: 'modifiedOn', displayValue: 'Modified On', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
