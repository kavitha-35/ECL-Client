import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';

import { UpdateLogisticTrfComponent } from '../_dialogues/update-logistic-trf/update-logistic-trf.component';
import { LogisticsFacade } from '../../../state/logistics/logistics.facade';

import { LogisticModel } from '../../../models/logistics/logistic.model';
import { HomeCollectionModel } from '../../../models/home-collections/home-collection.model';
import { AddLogisticItemComponent } from '../_dialogues/add-logistic-item/add-logistic-item.component';

@Component({
  selector: 'app-messenger',
  templateUrl: './logistic-messenger.component.html',
  styleUrls: ['./logistic-messenger.component.scss'],
})
export class LogisticMessengerComponent implements OnInit {
  public logistics            : LogisticModel[];

  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _logisticsFacade: LogisticsFacade
  ) {}

  ngOnInit(): void {
    this._logisticsFacade.logistics$.subscribe((data) => {
      if (data) {
        this.logistics = data.filter((x) => x.status.name === 'In Progress');
      }
    });

    this._logisticsFacade.loadLogistics();
  }

  public onUpdateTrfButtonClicked(homeCollectionModel: HomeCollectionModel): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      data: homeCollectionModel,
      width: '1400px',
    };

    this._matDialog.open(UpdateLogisticTrfComponent, matDialogConfig);
  }

  public onAddLogisticsClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      data: {} as LogisticModel,
      width: '1400px',
    };

    this._matDialog.open(AddLogisticItemComponent, matDialogConfig);
  }
}
