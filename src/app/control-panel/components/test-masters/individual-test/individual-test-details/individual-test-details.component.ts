import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { LinkTestToCombinedTestComponent } from '../../combined-test/_dialogues/link-test-to-combined-test/link-test-to-combined-test.component';

@Component({
  selector: 'app-individual-test-details',
  templateUrl: './individual-test-details.component.html',
  styleUrls: ['./individual-test-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualTestDetailsComponent implements OnInit, OnDestroy {
  dialogRef: any;
  combinedTestId: number;
  dosCode: string;
  test: IndividualTestModel;
  individualTest: IndividualTestModel[];
  isBusy: boolean;
  public displayedColumns: string[];
  public filteredColumns: GridColumnModel[];

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly matDialog: MatDialog,
    private _combinedTestService: CombinedTestService,
  ) {}

  ngOnInit(): void {
    this.isBusy = true;
    this._initializeDisplayedColumns();
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this._combinedTestService.getCombineTest(selectedId).subscribe((data: CombinedTestModel) => {
          this.test = data[0];
          this.isBusy = false;
        });
      }
    });
  }

  public getAllCombinedTest(): void {
    this.isBusy = true;
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this._combinedTestService.getCombineTest(selectedId).subscribe((data: CombinedTestModel) => {
          this.test = data[0];
          this.isBusy = false;
        });
      }
    });
  }

  public onDeleteIndividualTestMapping(individualTestId: string): void {}

  private _initializeDisplayedColumns(): void {
    this.filteredColumns = [
      { columnName: 'ageRange', displayValue: 'Age Range', isSelected: true },
      { columnName: 'lowerAge', displayValue: 'Lower Age', isSelected: true },
      { columnName: 'upperAge', displayValue: 'Upper Age', isSelected: false },
      { columnName: 'minimum', displayValue: 'Minimum', isSelected: false },
      { columnName: 'maximum', displayValue: 'Maximum', isSelected: true },
      { columnName: 'alternateResult', displayValue: 'Alternate Result', isSelected: true },
      { columnName: 'minimumCriticalRange', displayValue: 'Minimum Critical Range', isSelected: false },
      { columnName: 'maximumCriticalRange', displayValue: 'Maximum Critical Range', isSelected: true },
      { columnName: 'action', displayValue: 'Action', isSelected: true },
    ];
    const selectedColumns = this.filteredColumns.filter((x) => x.isSelected);
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onColumnChooserClosed(selectedColumns: GridColumnModel[]): void {
    this.displayedColumns = selectedColumns.map((x) => x.columnName);
  }

  public onAddIndividualTestClicked(): void {
    this.dialogRef = this.matDialog.open(LinkTestToCombinedTestComponent, this.matDialogConfig);
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data[0] === 'save') {
        const Payload = data[1].map((individualtest) => {
          return {
            // combineTestId: this.test.combineTestId,
            individualTestId: individualtest.individualTestId,
            ActiveStatus: 1,
          };
        });
        this._combinedTestService.addIndividualTestsToCombineTest(Payload).subscribe((recievedData) => {
          this.getAllCombinedTest();
        });
      }
    });
  }
  ngOnDestroy(): void {}
}
