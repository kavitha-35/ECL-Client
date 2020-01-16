import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { LinkTestToCombinedTestComponent } from '../_dialogues/link-test-to-combined-test/link-test-to-combined-test.component';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';

@Component({
  selector: 'app-combined-test-details',
  templateUrl: './combined-test-details.component.html',
  styleUrls: ['./combined-test-details.component.scss'],
})
export class CombinedTestDetailsComponent implements OnInit, OnDestroy {
  dialogRef: any;
  combinedTestId: number;
  dosCode: string;
  test: CombinedTestModel ;
  combinedTest: CombinedTestModel[];
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

  public onAddIndividualTestClicked(): void {
    this.dialogRef = this.matDialog.open(LinkTestToCombinedTestComponent, this.matDialogConfig);
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data[0] === 'save') {
        const Payload = data[1].map((individualtest) => {
          return {
            combineTestId: this.test.combineTestId,
            individualTestId: individualtest.individualTestId,
            ActiveStatus: 1,
          };
        });
        this._combinedTestService.addIndividualTestsToCombineTest(Payload).subscribe((recievedData) => {});
      }
    });
  }
  ngOnDestroy(): void {}
}
