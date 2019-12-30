import { Component, OnInit } from '@angular/core';
import {  MatDialog, PageEvent } from '@angular/material';
import { LogisticModel } from '../../../models/logistics/logistic.model';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperature-control',
  templateUrl: './temperature-control.component.html',
  styleUrls: ['./temperature-control.component.scss'],
})
export class TemperatureControlComponent implements OnInit {
  public isBusy: boolean;
  public logisticsCollections: LogisticModel[];
  public showListView: boolean;
  public pageEvent        : PageEvent;
  public pageSizeOptions  : number[] = [10, 25, 50, 100];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _logisticsFacade: LogisticsFacade,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.pageEvent =  { pageIndex : 0, pageSize : 10 } as PageEvent;
  }

  ngOnInit(): void {
    this._logisticsFacade.logistics$.subscribe((data) => {
      this.logisticsCollections = data.filter((x) => x.status.name === 'Pending Accession');
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
