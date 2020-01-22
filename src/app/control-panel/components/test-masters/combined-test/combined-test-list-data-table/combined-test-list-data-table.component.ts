import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LinkTestToCombinedTestComponent } from '../_dialogues/link-test-to-combined-test/link-test-to-combined-test.component';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';

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
  @Output() manageButtonClicked: EventEmitter<number>;
  @Output() addTestClicked: EventEmitter<string>;
  @Input() isBusy: boolean;
  public expandedElement: CombinedTestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  public expansionColoumns: string[];
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(private readonly matDialog: MatDialog, private _combinedTestService: CombinedTestService) {
    this.manageButtonClicked = new EventEmitter<number>();
    this.addTestClicked = new EventEmitter<string>();
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
  }

  public onEditCombinedTestModel(profiletest: CombinedTestModel): void {
    this.editCombinedTestClicked.emit(profiletest);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
  public onManageButtonClicked(combinedTestId: number): void {
    this.manageButtonClicked.emit(combinedTestId);
  }

  public onAddIndividualTestClicked(testId: string): void {
    this.addTestClicked.emit(testId);
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
