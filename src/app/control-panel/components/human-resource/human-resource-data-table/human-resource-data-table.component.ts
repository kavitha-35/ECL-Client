import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { HumanResourceModel } from 'app/control-panel/models/human-resource/human-resource.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-human-resource-data-table',
  templateUrl: './human-resource-data-table.component.html',
  styleUrls: ['./human-resource-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanResourceDataTableComponent implements OnInit {
  @Input() humanResources: HumanResourceModel[];
  @Input() isBusy: boolean;
  @Output() editHumanResourceClicked = new EventEmitter();
  @Output() deleteHumanResourceClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditHumanResourceClicked(): void {
    this.editHumanResourceClicked.emit();
  }

  public onDeleteHumanResourceClicked(): void {
    this.deleteHumanResourceClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'name', displayValue: 'Employee Name', isSelected: true },
      { columnName: 'department', displayValue: 'Department', isSelected: true },
      { columnName: 'dateOfBirth', displayValue: 'DOB', isSelected: false },
      { columnName: 'email', displayValue: 'E-mail', isSelected: true },
      { columnName: 'alternateEmail', displayValue: 'Alternate E-mail', isSelected: false },
      { columnName: 'contactNumber', displayValue: 'Contact Number', isSelected: true },
      { columnName: 'alternateContactNumber', displayValue: 'Alternate Contact Number', isSelected: false },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
