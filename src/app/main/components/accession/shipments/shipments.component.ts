import { Component, OnInit } from '@angular/core';

import { LogisticModel } from '../../../models/logistics/logistic.model';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
})
export class ShipmentsComponent implements OnInit {
  public logisticsCollections     : LogisticModel[];
  public showListView             : boolean;
  public pageEvent                : PageEvent;
  public pageSizeOptions          : number[];

  constructor(
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

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
}
