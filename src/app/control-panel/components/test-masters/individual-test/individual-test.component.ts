import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { take } from 'rxjs/operators';
import { AddIndividualTestComponent } from './_dialogues/add-individual-test/add-individual-test.component';
import { EditIndividualTestComponent } from './_dialogues/edit-individual-test/edit-individual-test.component';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  selector: 'app-individual-test',
  templateUrl: './individual-test.component.html',
  styleUrls: ['./individual-test.component.scss'],
})
export class IndividualTestComponent implements OnInit {
  public tests: IndividualTestModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public lastSavedTest: IndividualTestModel;
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

  public onAddIndividualTestButtonClicked(): void {
    this.matDialog
      .open(AddIndividualTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public onEditTestClicked(): void {
    this.matDialog
      .open(EditIndividualTestComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onDeleteTestClicked(testId: string): void {}

  public _initializeValues(): void {
    this.tests = [
      {
        id: '1708027',
        active: 'Active',
        testCategory: 'outsource',
        accreditationSymbol: '**',
        testComponent: 'blood',
        processingCenter: 'pathcare',
        outsourceVendorCode: 'HM052',
        method: 'CLIA',
        unit: '3 ml',
        referenceRange: '',
        tat: '10',
        cptAmount: '246',
        integrationCode: '-',
        accreditation: 'not enable',
        comments: 'String',
      },
      {
        id: '1708027',
        active: 'Active',
        testCategory: 'outsource',
        accreditationSymbol: '**',
        testComponent: 'blood',
        processingCenter: 'pathcare',
        outsourceVendorCode: 'HM052',
        method: 'CLIA',
        unit: '3 ml',
        referenceRange: '',
        tat: '10',
        cptAmount: '246',
        integrationCode: '-',
        accreditation: 'not enable',
        comments: 'String',
      },
      {
        id: '1708027',
        active: 'Active',
        testCategory: 'outsource',
        accreditationSymbol: '**',
        testComponent: 'blood',
        processingCenter: 'pathcare',
        outsourceVendorCode: 'HM052',
        method: 'CLIA',
        unit: '3 ml',
        referenceRange: '',
        tat: '10',
        cptAmount: '246',
        integrationCode: '-',
        accreditation: 'not enable',
        comments: 'String',
      },
    ];
  }
}
