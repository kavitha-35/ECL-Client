import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { AddReferenceRangeComponent } from './_dialogues/add-reference-range/add-reference-range.component';
import { take } from 'rxjs/operators';
import { EditReferenceRangeComponent } from './_dialogues/edit-reference-range/edit-reference-range.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { ReferenceRangeModel } from 'app/control-panel/models/reference-range/reference-range. model';

@Component({
  selector: 'app-refernce-range',
  templateUrl: './refernce-range.component.html',
  styleUrls: ['./refernce-range.component.scss'],
})
export class RefernceRangeComponent implements OnInit {
  public referenceRange: ReferenceRangeModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  public isFetchingReferalLab: boolean;
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
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

  public onAddReferenceRangeButtonClicked(): void {
    this._matDialog
      .open(AddReferenceRangeComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public onEditReferenceRangeClicked(): void {
    this._matDialog
      .open(EditReferenceRangeComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }
  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  private _initializeValues(): void {
    this.referenceRange = [
      {
        id: 'string',
        testCode: 'string',
        machine: 'string',
        testName: 'string',
        units: 'string',
        type: 'string',
        result: 'string',
        ageLower: 'string',
        ageUpper: 'string',
        minReferenceRangeFemale: 'string',
        maxReferenceRangeFemale: 'string',
        minReferenceRangeMale: 'string',
        maxReferenceRangeMale: 'string',
        minCriticalValue: 'string',
        maxCriticalValue: 'string',
      },
    ];
  }
}
