import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { HumanResourceModel } from 'app/control-panel/models/human-resource/human-resource.model';

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
  constructor() { }

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
      { columnName: 'name', displayValue: 'Name', isSelected: true },
      { columnName: 'department', displayValue: 'Department', isSelected: true },
      { columnName: 'dob', displayValue: 'Dob', isSelected: true },
      { columnName: 'email', displayValue: 'Email', isSelected: true },
      { columnName: 'alternateEmail', displayValue: 'Alternate Email', isSelected: true },
      { columnName: 'contactNo', displayValue: 'Contact No', isSelected: true },
      { columnName: 'alternateContactNo', displayValue: 'Alternate Contact No', isSelected: true },
      { columnName: 'defaultUrl', displayValue: 'Default Url', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
