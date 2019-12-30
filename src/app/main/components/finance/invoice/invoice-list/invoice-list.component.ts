import { Component, Input } from '@angular/core';
import { InvoiceModel } from '../../../../models/invoice/invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  @Input() public invoiceList             : InvoiceModel[];
  public displayedColumns                 : string[];

  constructor() {
    this._initializeProperties();
  }

  private _initializeProperties(): void {
    this.displayedColumns = ['id', 'date', 'organization', 'total', 'due', 'dueDate', 'age', 'status', 'action'];
  }
}
