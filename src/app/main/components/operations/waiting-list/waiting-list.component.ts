import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogisticModel } from '../../../models/logistics/logistic.model';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';
import { UpdateOperationsComponent } from './_dialogues/update-operations/update-operations.component';
import { PageEvent } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss'],
})
export class WaitingListComponent implements OnInit {
  public logisticsCollections : LogisticModel[];
  public showListView         : boolean;
  public pageEvent            : PageEvent;
  public pageSizeOptions      : number[];

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

  public onUpdateOperationButtonClicked(logisticModel: LogisticModel): void {
    const matDialogConfig: MatDialogConfig = {
      width: '1400px',
    };

    this._matDialog.open(UpdateOperationsComponent, matDialogConfig);
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
}
