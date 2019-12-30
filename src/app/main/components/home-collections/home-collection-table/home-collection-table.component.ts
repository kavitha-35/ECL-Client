import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HomeCollectionModel } from '../../../models/home-collections/home-collection.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-home-collection-table',
  templateUrl: './home-collection-table.component.html',
  styleUrls: ['./home-collection-table.component.scss'],
})
export class HomeCollectionTableComponent implements OnInit {
  @Input() public isBusy         : boolean;
  @Input() public homeCollections: HomeCollectionModel[];
  @Output() public rowSelected   : EventEmitter<string>;
  public filteredColumns         : GridColumnModel[];
  public displayedColumns        : string[];

  constructor() {
    this.rowSelected = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public async onRowClicked(selectedRow: HomeCollectionModel): Promise<void> {
    await this.rowSelected.emit(selectedRow.id);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onMenuButtonClicked(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'name', displayValue: 'Name', isSelected: true },
      { columnName: 'area', displayValue: 'Area', isSelected: true },
      { columnName: 'city', displayValue: 'City', isSelected: true },
      { columnName: 'postalCode', displayValue: 'Postal Code', isSelected: true },
      { columnName: 'phoneNumber', displayValue: 'Phone Number', isSelected: true },
      { columnName: 'date', displayValue: 'Date', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    this.displayedColumns = this.filteredColumns.map((x) => x.columnName);
  }
}
