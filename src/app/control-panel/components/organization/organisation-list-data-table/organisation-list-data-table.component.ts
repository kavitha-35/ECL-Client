import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-organisation-list-data-table',
  templateUrl: './organisation-list-data-table.component.html',
  styleUrls: ['./organisation-list-data-table.component.scss'],
})
export class OrganisationListDataTableComponent implements OnInit {
  @Input() organisations: OrganisationModel[];
  @Input() isBusy: boolean;
  @Output() editOrganisationClicked = new EventEmitter();
  @Output() deleteOrganisationClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditOrganisationClicked(): void {
    this.editOrganisationClicked.emit();
  }

  public onDeleteOrganisationClicked(): void {
    this.deleteOrganisationClicked.emit();
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    console.table(selectedColumns);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'Clinic ID', isSelected: true },
      { columnName: 'name', displayValue: 'Clinic Name', isSelected: true },
      { columnName: 'type', displayValue: 'Type', isSelected: false },
      { columnName: 'postBox', displayValue: 'Post Box', isSelected: true },
      { columnName: 'address', displayValue: 'Address', isSelected: false },
      { columnName: 'email', displayValue: 'Email', isSelected: true },
      { columnName: 'area', displayValue: 'Area', isSelected: false },
      { columnName: 'contactPerson', displayValue: 'Contact Person', isSelected: true },
      { columnName: 'contactNumber', displayValue: 'Contact Number', isSelected: true },
      { columnName: 'salesRepresentative', displayValue: 'Sales Representative', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
