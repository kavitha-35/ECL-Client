import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import * as faker from 'faker';

import { CaseModel } from '../../../models/case/case.model';
import { AddCaseComponent } from './_dialogues/add-case/add-case.component';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  public caseList       : CaseModel[];
  public showListView   : boolean;
  public pageEvent      : PageEvent;
  public pageSizeOptions: number[];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this._initializeProperties();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onAddCaseButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1440px',
    };

    this._matDialog.open(AddCaseComponent, matDialogConfig);
  }

  private _initializeProperties(): void {
    this.caseList = [];
    for (let i = 0; i < 25; i++) {
      this.caseList.push({
        id: faker.random.number().toString(),
        email: faker.internet.email(),
        escalatedTo: faker.name.firstName(),
        fileNumber: faker.random.number().toString(),
        mobile: faker.phone.phoneNumber().toString(),
        name: faker.name.firstName(),
        organization: faker.company.companyName(),
        physician: faker.name.firstName(),
        preventiveAction: faker.random.words(10),
        priority: faker.random.number().toString(),
        problem: faker.random.word(),
        reportedBy: faker.name.firstName(),
        rootCause: faker.random.word(),
        status: faker.random.arrayElement(['Open', 'On Hold', 'Closed']),
      });
    }
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }
}
