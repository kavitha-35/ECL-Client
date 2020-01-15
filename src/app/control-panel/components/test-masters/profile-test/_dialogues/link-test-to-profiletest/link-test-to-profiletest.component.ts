import { Component, OnInit } from '@angular/core';
import { TestModel } from 'app/main/models/patient/registration/add-patient-request.model';
import { MatDialogRef } from '@angular/material';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

@Component({
  selector: 'app-link-test-to-profiletest',
  templateUrl: './link-test-to-profiletest.component.html',
  styleUrls: ['./link-test-to-profiletest.component.scss'],
})
export class LinkTestToProfiletestComponent implements OnInit {
  tests: CombinedTestModel[];
  public searchQuery: string;
  public searchResults: TestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor(private readonly dialogRef: MatDialogRef<LinkTestToProfiletestComponent>) {}
  ngOnInit(): void {
    this._initializeDisplayedColumns();
    this._initializeValues();
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'name', displayValue: 'Name', isSelected: true },
      { columnName: 'testId', displayValue: 'Test Id', isSelected: false },
      { columnName: 'cptCode', displayValue: 'CPT Code', isSelected: false },
      { columnName: 'testName', displayValue: 'Test Name', isSelected: true },
      { columnName: 'specimenType', displayValue: 'Specimmen Type', isSelected: false },
      { columnName: 'storage', displayValue: 'Storage', isSelected: true },
      { columnName: 'department', displayValue: 'Department', isSelected: true },
      { columnName: 'location', displayValue: 'Location', isSelected: true },
      { columnName: 'currency', displayValue: 'Currency', isSelected: true },
      { columnName: 'status', displayValue: 'Status', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  private _initializeValues(): void {
    this.tests = [
      {
        eclDosCode: 'ECL-767',
        testId: 1313741,
        cptCode: '82465',
        testName: 'cholestrol,Total',
        specimen: '2 ml serum',
        specimenType: 'serum',
        storage: {
          StorageId: '1',
          StorageName: 'refrigerated',
        },
        department: {
          departmentId: '1',
          departmentName: 'biochemistry',
        },
        patientFee: 40.0,
        netFee: 10.0,
        location: 'dubai',
        currency: 'dihram',
        reportFormat: 1,
        description: 'sdf',
        individualTests: [
          {
            individualTestId: '1708027',
            testCategoryId: 1,
            ActiveStatus: 'Active',
            testCategory: {
              testCategoryId: '1',
              testCategoryName: 'OutSource',
            },
            accreditationSymbol: 1,
            testComponent: 'blood',
            processingCenter: {
              processingCenterId: '1',
              processingCenterName: 'pathcare',
            },
            outsourceVendorCode: 'HM052',
            method: {
              methodId: '1',
              methodName: 'CLIA',
            },
            unit: {
              unitId: '1',
              unitName: '2 ml',
            },
            tat: '1',
            cptAmount: 4.0,
            integrationCode: 105,
            comments: 'String',
          },
        ],
      },
    ];
  }

  public onSearchButtonClicked(): void {}
}
