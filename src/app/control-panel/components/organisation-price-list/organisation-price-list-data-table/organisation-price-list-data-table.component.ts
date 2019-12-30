import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { OrganisationPriceModel } from 'app/control-panel/models/organisation-price/organisation-price.model';

@Component({
  selector: 'app-organisation-price-list-data-table',
  templateUrl: './organisation-price-list-data-table.component.html',
  styleUrls: ['./organisation-price-list-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationPriceListDataTableComponent implements OnInit {
  @Input() organisations: OrganisationPriceModel[];
  @Input() isBusy: boolean;
  @Output() editOrganisationClicked = new EventEmitter();
  @Output() deleteOrganisationClicked = new EventEmitter();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  constructor() { }

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
      { columnName: 'name', displayValue: 'Organization Name', isSelected: true },
      { columnName: 'testid', displayValue: 'Test Id', isSelected: false },
      { columnName: 'doscode', displayValue: 'Dos Code', isSelected: true },
      { columnName: 'mrp', displayValue: 'MRP', isSelected: false },
      { columnName: 'net', displayValue: 'Net', isSelected: true },
      { columnName: 'cpt', displayValue: 'Cpt', isSelected: false },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter(x => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
