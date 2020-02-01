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
  @Output() editReferalLabClicked = new EventEmitter<string>();
  @Output() deleteReferalLabClicked = new EventEmitter<string>();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditReferalLabClicked(outsource: any): void {
    console.log('Selected row', outsource);
    this.editReferalLabClicked.emit(outsource);
  }

  public onDeleteReferalLabClicked(outsourceId: string): void {
    this.deleteReferalLabClicked.emit(outsourceId);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: ' ID', isSelected: true },
      { columnName: 'name', displayValue: 'Lab Name', isSelected: true },
      { columnName: 'web', displayValue: 'Web', isSelected: false },
      { columnName: 'telephone', displayValue: 'Telephone', isSelected: true },
      { columnName: 'fax', displayValue: 'Fax', isSelected: true },
      { columnName: 'relation', displayValue: 'Relation', isSelected: true },
      { columnName: 'interfacingType', displayValue: 'Interfacing Type', isSelected: true },
      { columnName: 'address', displayValue: 'Address', isSelected: false },
      { columnName: 'postBox', displayValue: 'Post Box', isSelected: false },
      { columnName: 'city', displayValue: 'City', isSelected: true },
      { columnName: 'country', displayValue: 'Country', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
