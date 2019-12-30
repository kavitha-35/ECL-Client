import { Component, OnInit, Input } from '@angular/core';
import { LogisticModel } from 'app/main/models/logistics/logistic.model';

@Component({
  selector: 'app-shipments-list',
  templateUrl: './shipments-list.component.html',
  styleUrls: ['./shipments-list.component.scss']
})
export class ShipmentsListComponent {
  @Input() public logisticsCollections: LogisticModel[];
  constructor() { }
}
