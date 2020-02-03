import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { MatTable } from '@angular/material';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';

@Component({
  selector: 'app-add-profile-test',
  templateUrl: './add-profile-test.component.html',
  styleUrls: ['./add-profile-test.component.scss']
})
export class AddProfileTestComponent implements OnInit {
  public testprofile: ProfileTestModel;
  groupById: number;
  orderById: number;
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  groupBys: LookUpModel[];
  public tests: IndividualTestModel[];
  selectedTests: IndividualTestModel[];
  testsInTable: IndividualTestModel[] = [];
  isBusy: boolean;
  @ViewChild(MatTable, { static: false }) _matTable: MatTable<any>;
  constructor(
    private readonly _lookUpService: LookupService,
    private readonly _combinedTestService: CombinedTestService,
  ) {
    this.groupById = 0;
    this.orderById = 0;
   }

  ngOnInit(): void {
    this.getAllIndividualTest();
    this.getGroupBy();
    this._initializeDisplayedColumns();
  }

  public get lookUpService(): LookupService {
    return this._lookUpService;
  }

  public selectedAutoComplete(element: IndividualTestModel): void {
    element.groupById = this.groupById;
    element.orderById = this.orderById;
    this.testsInTable.push(element);
    console.log(this.testsInTable);
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
}
