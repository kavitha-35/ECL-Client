import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { LogisticModel } from 'app/main/models/logistics/logistic.model';

@Component({
  selector: 'app-waiting-list-data-list',
  templateUrl: './waiting-list-data-list.component.html',
  styleUrls: ['./waiting-list-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingListDataListComponent {
  @Input() public logisticsCollections         : LogisticModel[];
  @Output() public updateOperationButtonClicked: EventEmitter<LogisticModel>;
  constructor() {}
}
