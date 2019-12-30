import { Component, OnInit } from '@angular/core';
import { LogisticModel } from '../../../../../models/logistics/logistic.model';
import * as faker from 'faker';
import { LogisticsFacade } from '../../../../../state/logistics/logistics.facade';

@Component({
  selector: 'app-stat-samples',
  templateUrl: './stat-samples.component.html',
  styleUrls: ['./stat-samples.component.scss'],
})
export class StatSamplesComponent implements OnInit {
  public logistics: LogisticModel[] = [];
  public displayedColumns: string[];

  constructor(private readonly _logisticsFacade: LogisticsFacade) {}

  ngOnInit(): void {
    this._logisticsFacade.logistics$.subscribe((logistics) => {
      if (logistics) {
        this.logistics = logistics.filter((x, index) => index <= 5);
      }
    });

    this._logisticsFacade.loadLogistics();
    this.displayedColumns = ['id', 'clinic', 'calledBy', 'driver', 'scheduledOn', 'modifiedOn', 'status'];
  }
}
