import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';

@Component({
  selector: 'app-individual-test-list-data-table',
  templateUrl: './individual-test-list-data-table.component.html',
  styleUrls: ['./individual-test-list-data-table.component.scss'],
})
export class IndividualTestListDataTableComponent implements OnInit {
  @Input() tests: IndividualTestModel[];
  @Input() isBusy: boolean;
  @Output() editTestClicked = new EventEmitter<IndividualTestModel>();
  @Output() deleteTestClicked = new EventEmitter<string>();
  @Output() referenceRangeClicked = new EventEmitter<string>();
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor() {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditTestClicked(test: IndividualTestModel): void {
    this.editTestClicked.emit(test);
  }

  public onDeleteClicked(testId: string): void {
    this.deleteTestClicked.emit(testId);
  }

  public onAddReferenceRangeClicked(testId: string): void {
    this.referenceRangeClicked.emit(testId);
  }
  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'ID', isSelected: true },
      { columnName: 'testName', displayValue: 'Test Name', isSelected: true },
      { columnName: 'testCategory', displayValue: 'Test Category', isSelected: false },
      { columnName: 'integrationCode', displayValue: 'Integration Code', isSelected: true },
      { columnName: 'processingCenter', displayValue: 'Processing Center', isSelected: false },
      { columnName: 'outsourceVendorCode', displayValue: 'Outsource Vendor Code', isSelected: true },
      { columnName: 'method', displayValue: 'Method', isSelected: true },
      { columnName: 'unit', displayValue: 'Unit', isSelected: true },
      { columnName: 'tat', displayValue: 'TAT', isSelected: true },
      { columnName: 'cptAmount', displayValue: 'CPT Amount', isSelected: false },
      { columnName: 'activity', displayValue: 'Activity', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
