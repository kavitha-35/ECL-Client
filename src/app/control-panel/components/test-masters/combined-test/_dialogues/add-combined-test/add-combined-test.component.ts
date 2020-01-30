import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatTable } from '@angular/material';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { CombinedTest, LinkTestToCombineTest } from '../../test.model';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-combined-test',
  templateUrl: './add-combined-test.component.html',
  styleUrls: ['./add-combined-test.component.scss'],
})
export class AddCombinedTestComponent implements OnInit {
  public get lookUpService(): LookupService {
    return this._lookUpService;
  }
  test: CombinedTest = new CombinedTest();
  specimen: LookUpModel[] = [];
  specimenType: LookUpModel[] = [];
  storage: LookUpModel[] = [];
  reportFormat: LookUpModel[] = [];
  departments: DepartmentModel[] = [];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  groupBys: LookUpModel[];
  public tests: IndividualTestModel[];
  selectedTests: IndividualTestModel[];
  testsInTable: IndividualTestModel[] = [];
  isBusy: boolean;
  selection = new SelectionModel<IndividualTestModel>(true, []);
  @ViewChild(MatTable, { static: false }) _matTable: MatTable<any>;
  constructor(
    private readonly dialogRef: MatDialogRef<AddCombinedTestComponent>,
    private readonly _combinedTestService: CombinedTestService,
    private readonly _lookUpService: LookupService,
    private readonly _departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {
    this.getSpecimen();
    this.getAllIndividualTest();
    this.getGroupBy();
    this.getSpecimenType();
    this.getStorage();
    this.getDepartments();
    this._initializeDisplayedColumns();
  }

  public selectedAutoComplete(element: IndividualTestModel): void {
    this.testsInTable.push(element);
    this._matTable.renderRows();
  }

  public searchQuery(event: any): void {
    this.selectedTests = this._filter(event.target.value);
  }

  private _filter(value: string): IndividualTestModel[] {
    const filterValue = value.toLowerCase();
    return this.tests.filter((option) => option.testComponent.toLowerCase().includes(filterValue));
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

  public getAllIndividualTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllIndividualTests().subscribe((data: IndividualTestModel[]) => {
      this.tests = data;
      this.isBusy = false;
    });
  }

  public addTest(): void {
    this.test.individualTests = this.testsInTable;
    console.log(this.test);
    this._combinedTestService.addTest(this.test).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getSpecimen(): void {
    this._lookUpService.getLookUp('Specimen').subscribe((data: LookUpModel[]) => {
      this.specimen = data;
    });
  }

  public getSpecimenType(): void {
    this._lookUpService.getLookUp('SpecimenType').subscribe((data: LookUpModel[]) => {
      this.specimenType = data;
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
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
  public getStorage(): void {
    this._lookUpService.getLookUp('Storage').subscribe((data: LookUpModel[]) => {
      this.storage = data;
    });
  }

  public getReportFormat(): void {
    this._lookUpService.getLookUp('ReportFormat').subscribe((data: LookUpModel[]) => {
      this.reportFormat = data;
    });
  }

  public getDepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
    });
  }
}
