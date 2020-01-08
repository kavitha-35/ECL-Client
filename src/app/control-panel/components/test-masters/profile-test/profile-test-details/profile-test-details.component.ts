import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { switchMap, take } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LinkTestToProfiletestComponent } from '../_dialogues/link-test-to-profiletest/link-test-to-profiletest.component';

@Component({
  selector: 'app-profile-test-details',
  templateUrl: './profile-test-details.component.html',
  styleUrls: ['./profile-test-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTestDetailsComponent implements OnInit, OnDestroy {
  dosCode: string;
  test: ProfileTestModel;
  profileTest: ProfileTestModel[];
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly matDialog: MatDialog) {}

  ngOnInit(): void {
    this._initializeDisplayedColumns();
    this._initializeValues();
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this.test = this.profileTest.find((x) => x.dosCode === selectedId);
      }
    });
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

  public onAddCombinedTestClicked(): void {
    this.matDialog
      .open(LinkTestToProfiletestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public _initializeValues(): void {
    this.profileTest = [
      {
        dosCode: 'ECL-767',
        testId: '1313741',
        cptCode: '82465',
        testName: 'cholestrol,Total',
        specimen: '2 ml serum',
        specimenType: 'serum',
        storage: 'refrigerated',
        department: 'biochemistry',
        patientFee: '40.00',
        netFee: '10.00',
        location: 'dubai',
        currency: 'dihram',
        combinedTest: [
          {
            dosCode: 'ECL-767',
            testId: '1313741',
            cptCode: '82465',
            testName: 'cholestrol,Total',
            specimen: '2 ml serum',
            specimenType: 'serum',
            storage: 'refrigerated',
            department: 'biochemistry',
            patientFee: '40.00',
            netFee: '10.00',
            location: 'dubai',
            currency: 'dihram',
            reportFormat: '',
          },
        ],
      },
    ];
  }

  ngOnDestroy(): void {}
}
