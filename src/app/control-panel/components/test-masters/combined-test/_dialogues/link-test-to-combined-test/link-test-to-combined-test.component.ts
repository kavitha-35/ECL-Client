import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TestModel } from 'app/main/models/tests/test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';

@Component({
  selector: 'app-link-test-to-combined-test',
  templateUrl: './link-test-to-combined-test.component.html',
  styleUrls: ['./link-test-to-combined-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkTestToCombinedTestComponent implements OnInit {
  public tests: IndividualTestModel[];
  public searchQuery: string;
  public searchResults: TestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  public selectedTests: IndividualTestModel[] = [];

  constructor(private readonly dialogRef: MatDialogRef<LinkTestToCombinedTestComponent>,
    private _combinedTestService: CombinedTestService) {}
  ngOnInit(): void {
    this._initializeDisplayedColumns();
    this._combinedTestService.getAllIndividualTests().subscribe((data: IndividualTestModel[]) => {
      this.tests = data;
      console.log(this.tests);
    });
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
      { columnName: 'action', displayValue: 'Action', isSelected: true }
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
  onAddCombinedTestClicked(element: IndividualTestModel): void {
    const index = this.tests.indexOf(element);
    this.selectedTests.push(element);
    this.tests.splice(index, 1);
  }

  saveSelectedTests(): void {
    this.dialogRef.close(['save', this.selectedTests])
  }
  private _initializeValues(): void {
    this._combinedTestService.getAllIndividualTests().subscribe((data: IndividualTestModel[]) => {
      this.tests = data;
      console.log(this.tests);
    });
  }

  public onSearchButtonClicked(): void {}
}