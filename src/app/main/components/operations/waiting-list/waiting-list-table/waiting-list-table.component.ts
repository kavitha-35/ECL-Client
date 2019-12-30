import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogisticModel } from '../../../../models/logistics/logistic.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-waiting-list-table',
  templateUrl: './waiting-list-table.component.html',
  styleUrls: ['./waiting-list-table.component.scss'],
})
export class WaitingListTableComponent {
  @Input() public logisticsCollections: LogisticModel[];
  @Output() public updateOperationButtonClicked: EventEmitter<LogisticModel>;
  public displayedColumns               : string[];
  public filteredColumns                : GridColumnModel[];

  constructor() {
    this._initializeDisplayedColumns();
    this.updateOperationButtonClicked = new EventEmitter<LogisticModel>();
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Id', isSelected: true },
      { columnName: 'clinic', displayValue: 'Clinic', isSelected: true },
      { columnName: 'calledBy', displayValue: 'Called By', isSelected: true },
      { columnName: 'driver', displayValue: 'Driver', isSelected: true },
      { columnName: 'scheduledOn', displayValue: 'Scheduled On', isSelected: true },
      { columnName: 'modifiedOn', displayValue: 'Requested On', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }

  public onUpdateOperationButtonClicked(selectedLogisticModel: LogisticModel): void {
    this.updateOperationButtonClicked.emit(selectedLogisticModel);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
