import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import * as faker from 'faker';

import { WorkSheetModel } from '../../../models/work-sheet/work-sheet.model';
import { AddWorksheetComponent } from './_dialogues/add-worksheet/add-worksheet.component';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPLAY_MODE } from 'app/main/models/constants';

@Component({
  selector: 'app-work-sheets',
  templateUrl: './work-sheets.component.html',
  styleUrls: ['./work-sheets.component.scss'],
})
export class WorkSheetsComponent implements OnInit {
  public workSheetList: WorkSheetModel[];
  public showListView: boolean;
  public pageEvent: PageEvent;
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

  public onAddWorkSheetButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
    };

    this._matDialog.open(AddWorksheetComponent, matDialogConfig);
  }

  private _initializeProperties(): void {
    this.workSheetList = [];
    for (let i = 0; i < 25; i++) {
      this.workSheetList.push({
        id: faker.random.number().toString(),
        clinic: faker.company.companyName(),
        comment: faker.random.word(),
        date: faker.date.future().toDateString(),
        patientName: faker.name.firstName(),
        testCode: faker.random.word(),
        testName: faker.random.word(),
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
