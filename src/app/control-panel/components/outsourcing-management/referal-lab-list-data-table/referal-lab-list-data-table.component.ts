import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { OutsourcingManagementModel } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';

@Component({
  selector: 'app-referal-lab-list-data-table',
  templateUrl: './referal-lab-list-data-table.component.html',
  styleUrls: ['./referal-lab-list-data-table.component.scss'],
})
export class ReferalLabListDataTableComponent implements OnInit {
  @Input() labs : OutsourcingManagementModel[];
  @Input() isBusy: boolean;
  @Output() editReferalLabClicked = new EventEmitter();
  @Output() deleteReferalLabClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditReferalLabClicked(): void {
    this.editReferalLabClicked.emit();
  }

  public onDeleteReferalLabClicked(): void {
    this.deleteReferalLabClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Clinic ID', isSelected: true },
      { columnName: 'name', displayValue: 'Lab Name', isSelected: true },
      { columnName: 'address', displayValue: 'Address', isSelected: false },
      { columnName: 'postBox', displayValue: 'Post Box', isSelected: false },
      { columnName: 'telephone', displayValue: 'Telephone', isSelected: true },
      { columnName: 'fax', displayValue: 'Fax', isSelected: true },
      { columnName: 'web', displayValue: 'Web', isSelected: false },
      { columnName: 'region', displayValue: 'Region', isSelected: true },
      { columnName: 'country', displayValue: 'Country', isSelected: true },
      { columnName: 'salesRepresentative', displayValue: 'Sales Representative', isSelected: true },
      { columnName: 'courier', displayValue: 'Courier', isSelected: true },
      { columnName: 'contactMobileNumber', displayValue: 'Mobile Number', isSelected: true },
      { columnName: 'mail', displayValue: 'Mail', isSelected: false },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}