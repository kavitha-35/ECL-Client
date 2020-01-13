import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, PageEvent } from '@angular/material';
import { TestService } from 'app/main/services/test.service';
import { take } from 'rxjs/operators';
import { AddCombinedTestComponent } from './_dialogues/add-combined-test/add-combined-test.component';
import { EditCombinedTestComponent } from './_dialogues/edit-combined-test/edit-combined-test.component';
import { TestModel } from 'app/control-panel/models/tests/test.model';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

@Component({
  selector: 'app-combined-test',
  templateUrl: './combined-test.component.html',
  styleUrls: ['./combined-test.component.scss'],
})
export class CombinedTestComponent implements OnInit {
  public tests: CombinedTestModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public lastSavedTest: CombinedTestModel;
  public isFetchingTests: boolean;

  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this._initializeValues();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onManageButtonClicked(dosCode: string): void {
    this._router.navigate(['/control-panel/combined-test-details'], { queryParams: { id: dosCode } });
  }

  public onAddCombinedTestButtonClicked(): void {
    this.matDialog
      .open(AddCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe((testToBeAdded: TestModel) => { });
  }

  public onEditTestClicked(test: any): void {
    this.matDialogConfig.data = test;
    this.matDialog
      .open(EditCombinedTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe((testToBeEdited: any) => { });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteTestClicked(testId: string): void { }

  public _initializeValues(): void {
    this.tests = [
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
        individualTest: [
          {
            id: '1708027',
            active: 'Active',
            testCategory: 'outsource',
            accreditationSymbol: '**',
            testComponent: 'blood',
            processingCenter: 'pathcare',
            outsourceVendorCode: 'HM052',
            method: 'CLIA',
            unit: '2 ml',
            referenceRange: '3.00 to 40.00',
            tat: '1',
            cptAmount: '4.00',
            integrationCode: 'T105',
            accreditation: 'not enable',
            comments: 'String',
          },
        ],
      },
    ];
  }
}
