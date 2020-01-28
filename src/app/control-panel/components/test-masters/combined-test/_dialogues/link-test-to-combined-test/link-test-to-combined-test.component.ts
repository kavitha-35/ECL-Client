import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialogRef, MatAutocompleteSelectedEvent, MatTable } from '@angular/material';
import { TestModel } from 'app/main/models/tests/test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { SelectionModel } from '@angular/cdk/collections';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-link-test-to-combined-test',
  templateUrl: './link-test-to-combined-test.component.html',
  styleUrls: ['./link-test-to-combined-test.component.scss'],
})
export class LinkTestToCombinedTestComponent implements OnInit {
  groupBys: LookUpModel[];
  public tests: IndividualTestModel[];
  selectedTests: IndividualTestModel[];
  testsInTable: IndividualTestModel[] = [];
  isBusy: boolean;
  public searchResults: TestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  selection = new SelectionModel<IndividualTestModel>(true, []);
  @ViewChild(MatTable, { static: false }) _matTable: MatTable<any>;

  constructor(
    private readonly dialogRef: MatDialogRef<LinkTestToCombinedTestComponent>,
    private _combinedTestService: CombinedTestService,
    private readonly _lookUpService: LookupService,
    public cRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getAllIndividualTest();
    this.getGroupBy();
    this._initializeDisplayedColumns();
  }

  private _filter(value: string): IndividualTestModel[] {
    const filterValue = value.toLowerCase();
    return this.tests.filter((option) => option.testComponent.toLowerCase().includes(filterValue));
  }

  public searchQuery(event: any): void {
    this.selectedTests = this._filter(event.target.value);
  }

  public selectedAutoComplete(element: IndividualTestModel): void {
    this.testsInTable.push(element);
    this._matTable.renderRows();
  }

  public getGroupBy(): void {
    this._lookUpService.getLookUp('groupBy').subscribe((data: LookUpModel[]) => {
      this.groupBys = data;
    });
  }


  public onClearButtonClicked(index: number): void {
    this.testsInTable.splice(index, 1);
    this._matTable.renderRows();
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'id', displayValue: 'ID', isSelected: true },
      { columnName: 'activity', displayValue: 'Activity', isSelected: true },
      { columnName: 'testCategory', displayValue: 'Test Category', isSelected: false },
      { columnName: 'accreditiationSymbol', displayValue: 'Accreditiation Symbol', isSelected: false },
      { columnName: 'integrationCode', displayValue: 'Integration Code', isSelected: true },
      { columnName: 'testComponent', displayValue: 'Test Component', isSelected: true },
      { columnName: 'processingCenter', displayValue: 'Processing Center', isSelected: false },
      { columnName: 'outsourceVendorCode', displayValue: 'Outsource Vendor Code', isSelected: true },
      { columnName: 'method', displayValue: 'Method', isSelected: true },
      { columnName: 'unit', displayValue: 'Unit', isSelected: true },
      { columnName: 'referenceRange', displayValue: 'Reference Range', isSelected: false },
      { columnName: 'tat', displayValue: 'TAT', isSelected: true },
      { columnName: 'cptAmount', displayValue: 'CPT Amount', isSelected: false },
      { columnName: 'comments', displayValue: 'Comments', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  saveSelectedTests(): void {
    this.dialogRef.close(['save', this.testsInTable]);
  }

  public getAllIndividualTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllIndividualTests().subscribe((data: IndividualTestModel[]) => {
      this.tests = data;
      this.isBusy = false;
    });
  }

  public onSearchButtonClicked(): void {}
}
