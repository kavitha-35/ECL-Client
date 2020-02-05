import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { MatDialogConfig, MatDialog, MatTable, MatDialogRef } from '@angular/material';
import { LinkTestToProfiletestComponent } from '../_dialogues/link-test-to-profiletest/link-test-to-profiletest.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { ProfileTestService } from 'app/control-panel/services/profiletest.service';
import { ProfileTestComponent } from '../profile-test.component';

@Component({
  selector: 'app-profile-test-list-data-table',
  templateUrl: './profile-test-list-data-table.component.html',
  styleUrls: ['./profile-test-list-data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfileTestListDataTableComponent implements OnInit {
  @Output() addTestClicked: EventEmitter<string>;
  @Input() tests: ProfileTestModel[];
  @Output() editProfileTestClicked = new EventEmitter<ProfileTestModel>();
  @Output() deleteprofileTestClicked: EventEmitter<string>;
  @Output() manageButtonClicked: EventEmitter<string>;
  @Input() isBusy: boolean;
  public expandedElement: ProfileTestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };
  constructor(
    private readonly _profileTestService: ProfileTestService) {
    this.addTestClicked = new EventEmitter<string>();
    this.deleteprofileTestClicked = new EventEmitter<string>();
    this.manageButtonClicked = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
    this._getTests();
  }

  public onEditProfileTestClicked(profiletest: ProfileTestModel): void {
    this.editProfileTestClicked.emit(profiletest);
  }
  public onDeleteProfileTestClicked(index: number): void {
    this.tests.splice(index, 1);
    this.table.renderRows();
    // this.deleteprofileTestClicked.emit();
  }
  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
  public onManageButtonClicked(dosCode: string): void {
    this.manageButtonClicked.emit(dosCode);
  }

  public _getTests(): void {
    this._profileTestService.getProfileDetails().subscribe(
      (data) => {
        this.tests = data;
        console.log('_profileTest', this.tests);
      },
      (err) => console.log('_profileTest', err),
    );
  }

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'nestedSymbol', displayValue: 'ID', isSelected: true },
      { columnName: 'name', displayValue: 'Activity', isSelected: true },
      { columnName: 'testId', displayValue: 'Test Category', isSelected: true },
      { columnName: 'cptCode', displayValue: 'Accreditiation Symbol', isSelected: true },
      { columnName: 'testName', displayValue: 'Integration Code', isSelected: true },
      { columnName: 'price', displayValue: 'Processing Center', isSelected: true },
      { columnName: 'storage', displayValue: 'Outsource Vendor Code', isSelected: true },
      { columnName: 'department', displayValue: 'Method', isSelected: true },
      { columnName: 'location', displayValue: 'Unit', isSelected: true },
      { columnName: 'currency', displayValue: 'Reference Range', isSelected: true },
      { columnName: 'status', displayValue: 'TAT', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true }
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
