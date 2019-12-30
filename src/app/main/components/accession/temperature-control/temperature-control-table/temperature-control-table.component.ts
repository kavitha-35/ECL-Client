import { Component, OnInit, Input } from '@angular/core';
import { LogisticModel } from 'app/main/models/logistics/logistic.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ManageTrfComponent } from '../../_dialogues/manage-trf/manage-trf.component';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-temperature-control-table',
  templateUrl: './temperature-control-table.component.html',
  styleUrls: ['./temperature-control-table.component.scss'],
})
export class TemperatureControlTableComponent implements OnInit {
  @Input() public logisticsCollections: LogisticModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  constructor(private readonly _matDialog: MatDialog) {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onManageTrfButtonClicked(selectedLogisticModel: LogisticModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      data: selectedLogisticModel,
    };

    this._matDialog.open(ManageTrfComponent, matDialogConfig);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
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
}
