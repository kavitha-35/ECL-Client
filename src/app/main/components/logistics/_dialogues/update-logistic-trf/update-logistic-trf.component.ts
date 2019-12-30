import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

import { LogisticModel } from '../../../../models/logistics/logistic.model';

@Component({
  selector: 'app-trf-form',
  templateUrl: './update-logistic-trf.component.html',
  styleUrls: ['./update-logistic-trf.component.scss'],
})
export class UpdateLogisticTrfComponent implements OnInit {
  public selectedLogistic       : LogisticModel;
  public specimens              : number[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: LogisticModel) {}

  ngOnInit(): void {
    this.selectedLogistic = this.data;
  }

  public onAddSpecimenClicked(): void {
    this.specimens = [...this.specimens, this.specimens.length + 1];
  }
}
