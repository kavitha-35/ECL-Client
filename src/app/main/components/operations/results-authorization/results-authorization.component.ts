import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { RegistrationModel } from '../../../models/registration/registration.model';
import { RegistrationFacade } from '../../../state/registration/registration.facade';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  selector: 'app-results-authorization',
  styleUrls: ['./results-authorization.component.scss'],
  templateUrl: './results-authorization.component.html',
})
export class ResultsAuthorizationComponent implements OnInit {
  public registrations$: Observable<RegistrationModel[]>;
  public showListView: boolean;
  public pageEvent: PageEvent;
  public pageSizeOptions: number[];

  constructor(
    private readonly _registrationFacade: RegistrationFacade,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.registrations$ = this._registrationFacade.registrations$;
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
