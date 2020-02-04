import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TestModel } from 'app/main/models/patient/registration/add-patient-request.model';
import { MatDialogRef, MatTable, MatDialogConfig, MatDialog } from '@angular/material';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { ProfileTestService } from 'app/control-panel/services/profiletest.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-link-test-to-profiletest',
  templateUrl: './link-test-to-profiletest.component.html',
  styleUrls: ['./link-test-to-profiletest.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LinkTestToProfiletestComponent implements OnInit {
  groupBys: LookUpModel[];
  public tests: IndividualTestModel[];
  selectedTests: IndividualTestModel[];
  public testsInTable: IndividualTestModel[] = [];
  isBusy: boolean;
  public searchResults: TestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  selection = new SelectionModel<IndividualTestModel>(true, []);
  @ViewChild(MatTable, { static: false }) _matTable: MatTable<any>;

  constructor(
    private _combinedTestService: CombinedTestService,
    private readonly _lookUpService: LookupService,
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
    // console.log('selected element', element);
    const individualTest = this.testsInTable.filter(t => t.individualTestId === element.individualTestId)[0];
    if (individualTest) {
      return;
    }
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

  public getAllIndividualTest(): void {
    this.isBusy = true;
    this._combinedTestService.getAllIndividualTests().subscribe((data: IndividualTestModel[]) => {
      this.tests = data;
      this.isBusy = false;
    });
  }

  public onSearchButtonClicked(): void {}

  public refreshLinkedTests(elements: IndividualTestModel[]): void {
    if (!elements || elements.length === 0) {
      return
    }
    this.testsInTable = elements;
    this._matTable.renderRows();
  }
}
