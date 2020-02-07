import { Component, Input } from '@angular/core';

import { LogisticModel } from '../../../../models/logistics/logistic.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { RegistrationListModel } from 'app/main/models/registration-list/registration-list.model';

@Component({
  selector: 'app-pending-accession-table',
  templateUrl: './pending-accession-table.component.html',
  styleUrls: ['./pending-accession-table.component.scss'],
})
export class PendingAccessionTableComponent {
  @Input() public pendingAccession        : RegistrationListModel[];
  @Input() public showLinkIcon          : boolean;
  @Input() public showDeleteIcon        : boolean;
  @Input() public showActionIcon        : boolean;

  // @Output() public registrationSelected : EventEmitter<RegistrationModel>;
  // @Output() public linkButtonClicked    : EventEmitter<RegistrationModel>;

  public displayedColumns               : string[];
  public filteredColumns                : GridColumnModel[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    // this.registrationSelected = new EventEmitter<RegistrationModel>();
    // this.linkButtonClicked = new EventEmitter<RegistrationModel>();

    this.filteredColumns = [
      { columnName: 'id', displayValue: 'SID', isSelected: true },
      { columnName: 'visitId', displayValue: 'Visit ID', isSelected: true },
      { columnName: 'date', displayValue: 'Date', isSelected: true },
      { columnName: 'patientDetails', displayValue: 'Patient Details', isSelected: true },
      { columnName: 'organization', displayValue: 'Organization', isSelected: true },
      { columnName: 'physician', displayValue: 'Physician', isSelected: true },
      { columnName: 'sample', displayValue: 'Sample', isSelected: true },
      { columnName: 'tat', displayValue: 'TAT', isSelected: true },
      { columnName: 'billingDate', displayValue: 'Billing Date', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];

    this.displayedColumns = this.filteredColumns.map(x => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map(x => x.columnName);
  }

  // public onRowClicked(selectedRegistration: RegistrationModel): void {
  //   this.registrationSelected.emit(selectedRegistration);
  // }

  // public onLinkButtonClicked(mouseEvent: MouseEvent, selectedRegistrationModel: RegistrationModel): void {
  //   mouseEvent.stopPropagation();
  //   this.linkButtonClicked.emit(selectedRegistrationModel);
  // }

  public onActionButtonClicked(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
  }
}
