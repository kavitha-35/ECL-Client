import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LinkTestToProfiletestComponent } from '../_dialogues/link-test-to-profiletest/link-test-to-profiletest.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

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
  @Input() tests: ProfileTestModel[];
  @Output() editProfileTestClicked = new EventEmitter<ProfileTestModel>();
  @Output() manageButtonClicked: EventEmitter<string>;
  @Input() isBusy: boolean;
  public expandedElement: ProfileTestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  constructor(private readonly matDialog: MatDialog) {
    this.manageButtonClicked = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this._initializeDisplayedColumns();
  }

  public onEditProfileTestClicked(profiletest: ProfileTestModel): void {
    this.editProfileTestClicked.emit(profiletest);
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
      { columnName: 'location', displayValue: 'Unit', isSelected: true },
      { columnName: 'currency', displayValue: 'Reference Range', isSelected: true },
      { columnName: 'status', displayValue: 'TAT', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }
}
