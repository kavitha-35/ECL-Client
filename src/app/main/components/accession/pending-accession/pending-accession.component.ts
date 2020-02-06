import { Component, OnInit } from '@angular/core';

import { LogisticModel } from '../../../models/logistics/logistic.model';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';
import { DISPLAY_MODE } from 'app/main/models/constants';
import { RegistrationModel } from 'app/main/models/registration/registration.model';
import { TestByStatusService } from 'app/main/services/test-by-status.service';
import { RegistrationListModel } from 'app/main/models/registration-list/registration-list.model';

@Component({
  selector: 'app-pending-accession',
  templateUrl: './pending-accession.component.html',
  styleUrls: ['./pending-accession.component.scss'],
})
export class PendingAccessionComponent implements OnInit {
  scannedValue: string;
  public pendingAccession: RegistrationListModel[] = [];
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[] = [10, 25, 50, 100];

  constructor(
    private readonly _logisticsFacade: LogisticsFacade,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _pendingAccessionService: TestByStatusService,
  ) {
    this.scannedValue = '';
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
  }

  ngOnInit(): void {
    this.getAllPendingAccession();
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

  public barcodeScanner(event: any): void {
    console.log(this.scannedValue);
    this._pendingAccessionService.changeStatusList(this.scannedValue, 'pending').subscribe((data) => {
      this.scannedValue = '';
    });
  }

  public getAllPendingAccession(): void {
    this._pendingAccessionService.getAllStatusList('pending').subscribe((data) => {
      this.pendingAccession = data;
    });
  }
}
