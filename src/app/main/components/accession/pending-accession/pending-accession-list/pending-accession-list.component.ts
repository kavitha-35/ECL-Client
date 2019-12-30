import { Component, OnInit, Input } from '@angular/core';
import { LogisticModel } from 'app/main/models/logistics/logistic.model';

@Component({
  selector: 'app-pending-accession-list',
  templateUrl: './pending-accession-list.component.html',
  styleUrls: ['./pending-accession-list.component.scss'],
})
export class PendingAccessionListComponent {
  @Input() public logisticsCollections: LogisticModel[];
  constructor() {}
}
