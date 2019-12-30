import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

import { LogisticModel } from '../../../models/logistics/logistic.model';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';
import { AddLogisticItemComponent } from '../_dialogues/add-logistic-item/add-logistic-item.component';

@Component({
  selector: 'app-logistic-home',
  templateUrl: './logistic-reception.component.html',
  styleUrls: ['./logistic-reception.component.scss'],
})
export class LogisticReceptionComponent implements OnInit {
  public logisticsList        : LogisticModel[];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _logisticsFacade: LogisticsFacade
  ) {}

  ngOnInit(): void {
    this._logisticsFacade.logistics$.subscribe((logistics) => {
      if (logistics) {
        this.logisticsList = logistics.filter(
          (x) => x.status.name === 'Open' || x.status.name === 'In Process' || x.status.name === 'Cancelled',
        );
      }
    });

    this._logisticsFacade.loadLogistics();
  }

  public onAddLogisticsClicked(): void {
    const date: Date = new Date();
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      data: {
        modifiedOn: date,
      } as LogisticModel,
      width: '1400px',
    };

    this._matDialog.open(AddLogisticItemComponent, matDialogConfig);
  }
}
