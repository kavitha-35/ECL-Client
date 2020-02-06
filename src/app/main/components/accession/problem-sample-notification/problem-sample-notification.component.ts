import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LogisticModel } from '../../../models/logistics/logistic.model';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { AddProblemsampleComponent } from './_dialogues/add-problemsample/add-problemsample.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-problem-sample-notification',
  templateUrl: './problem-sample-notification.component.html',
  styleUrls: ['./problem-sample-notification.component.scss'],
})
export class ProblemSampleNotificationComponent implements OnInit {
  public logisticsCollections: LogisticModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];
  matDialogConfig: MatDialogConfig = {
    panelClass: 'mat-dialogue-no-padding',
    width: '1400px',
    autoFocus: false,
  };

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _logisticsFacade: LogisticsFacade,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this._logisticsFacade.logistics$.subscribe((data) => {
      this.logisticsCollections = data;
    });

    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddProblemSampleNotificationClicked(): void {
    this._matDialog
      .open(AddProblemsampleComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }
  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
}
