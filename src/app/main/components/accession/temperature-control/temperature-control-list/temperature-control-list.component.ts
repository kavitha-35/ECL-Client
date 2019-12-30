import { Component, OnInit, Input } from '@angular/core';
import { LogisticModel } from 'app/main/models/logistics/logistic.model';

@Component({
  selector: 'app-temperature-control-list',
  templateUrl: './temperature-control-list.component.html',
  styleUrls: ['./temperature-control-list.component.scss'],
})
export class TemperatureControlListComponent {
  @Input() public logisticsCollections      : LogisticModel[];
  constructor() {}
}
