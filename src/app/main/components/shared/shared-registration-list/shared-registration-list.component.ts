import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RegistrationModel } from '../../../models/registration/registration.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-shared-registration-list',
  templateUrl: './shared-registration-list.component.html',
  styleUrls: ['./shared-registration-list.component.scss'],
})
export class SharedRegistrationListComponent {
  @Input() public registrations: RegistrationModel[];
  @Input() public showLinkIcon: boolean;
  @Input() public showDeleteIcon: boolean;
  @Input() public showActionIcon: boolean;

  @Output() public registrationSelected: EventEmitter<RegistrationModel>;
  @Output() public linkButtonClicked: EventEmitter<RegistrationModel>;

  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.registrationSelected = new EventEmitter<RegistrationModel>();
    this.linkButtonClicked = new EventEmitter<RegistrationModel>();

    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Id', isSelected: true },
      { columnName: 'name', displayValue: 'Name', isSelected: true },
      { columnName: 'email', displayValue: 'Email', isSelected: true },
      { columnName: 'mobileNumber', displayValue: 'Mobile Number', isSelected: true },
      { columnName: 'area', displayValue: 'Area', isSelected: true },
      { columnName: 'city', displayValue: 'City', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }

  public onRowClicked(selectedRegistration: RegistrationModel): void {
    this.registrationSelected.emit(selectedRegistration);
  }

  public onLinkButtonClicked(mouseEvent: MouseEvent, selectedRegistrationModel: RegistrationModel): void {
    mouseEvent.stopPropagation();
    this.linkButtonClicked.emit(selectedRegistrationModel);
  }

  public onActionButtonClicked(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
