import { Component, Input } from '@angular/core';
import { PaymentCollectionModel } from '../../../../models/payment-collection/payment-collection.model';
import { PaymentCollectionService } from '../../../../services/payment-collection.service'

@Component({
selector: 'app-payment-collection-list',
templateUrl: './payment-collection-list.component.html',
styleUrls: ['./payment-collection-list.component.scss'],
})

export class PaymentCollectionListComponent {

@Input() public paymentList : PaymentCollectionModel[];
public displayedColumns : string[];

constructor(private readonly paymentCollectionService: PaymentCollectionService) {
this._initializeProperties();
}

private _initializeProperties(): void {
this.getAllPaymentCollection();
this.displayedColumns = ['id', 'date', 'organization', 'total', 'due', 'dueDate', 'status', 'action'];
}

getAllPaymentCollection(): void {
}
}

