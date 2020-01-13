import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-combined-test-list-data-table',
  templateUrl: './combined-test-list-data-table.component.html',
  styleUrls: ['./combined-test-list-data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CombinedTestListDataTableComponent implements OnInit {
  @Input() tests: CombinedTestModel[];
  @Output() editCombinedTestClicked = new EventEmitter<CombinedTestModel>();
  @Output() manageButtonClicked: EventEmitter<string>;
  @Input() isBusy: boolean;
  public expandedElement: CombinedTestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  expansionColoumns: string[];

  constructor(private readonly matDialog: MatDialog) {
    this.manageButtonClicked = new EventEmitter<string>();
    this.expansionColoumns = [
      'nestedSymbol',
      'testCategory',
      'testComponent',
      'outsourceVendorCode',
      'method',
      'unit',
      'referenceRange',
      'cptAmount',
      'tat',
    ];
  }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
    console.log(this.tests);
  }

  public onEditCombinedTestModel(profiletest: CombinedTestModel): void {
    this.editCombinedTestClicked.emit(profiletest);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
  public onManageButtonClicked(dosCode: string): void {
    this.manageButtonClicked.emit(dosCode);
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'nestedSymbol', displayValue: 'ID', isSelected: true },
      { columnName: 'name', displayValue: 'Activity', isSelected: true },
      { columnName: 'testId', displayValue: 'Test Category', isSelected: false },
      { columnName: 'cptCode', displayValue: 'Accreditiation Symbol', isSelected: false },
      { columnName: 'testName', displayValue: 'Integration Code', isSelected: true },
      { columnName: 'price', displayValue: 'Processing Center', isSelected: false },
      { columnName: 'storage', displayValue: 'Outsource Vendor Code', isSelected: true },
      { columnName: 'department', displayValue: 'Method', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
