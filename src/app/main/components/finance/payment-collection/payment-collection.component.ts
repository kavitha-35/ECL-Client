import { Component, Input } from '@angular/core';
import * as faker from 'faker';

import { PaymentCollectionModel } from '../../../models/payment-collection/payment-collection.model';

@Component({
  selector: 'app-payment-collection',
  templateUrl: './payment-collection.component.html',
  styleUrls: ['./payment-collection.component.scss']
})

export class PaymentCollectionComponent {
  @Input() public paymentList : PaymentCollectionModel[];
  public displayedColumns     : string[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.displayedColumns = ['id', 'date', 'organization', 'total', 'due', 'dueDate', 'status', 'action'];
  }
}
