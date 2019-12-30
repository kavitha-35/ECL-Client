import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

import { LogisticModel } from '../../../../models/logistics/logistic.model';

@Component({
  selector: 'app-manage-trf',
  templateUrl: './manage-trf.component.html',
  styleUrls: ['./manage-trf.component.scss'],
})
export class ManageTrfComponent implements OnInit {
  public selectedLogisticModel: LogisticModel = {} as LogisticModel;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly data: LogisticModel) {}

  ngOnInit(): void {
    this.selectedLogisticModel = this.data;
  }
}
