import { Component } from '@angular/core';

import * as faker from 'faker';

import { InvoiceModel } from '../../../models/invoice/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  public invoiceList            : InvoiceModel[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.invoiceList = [];
    for (let i = 0; i < 25; i++) {
      this.invoiceList.push({
        id: faker.random.number().toString(),
        age: faker.random.number().toString(),
        date: faker.date.past().toDateString(),
        due: faker.random.number().toString(),
        dueDate: faker.date.past().toDateString(),
        organization: faker.company.companyName(),
        status: faker.random.arrayElement(['Pending', 'Completed', 'Overdue']),
        total: faker.random.number().toString()
      });
    }
  }
}
