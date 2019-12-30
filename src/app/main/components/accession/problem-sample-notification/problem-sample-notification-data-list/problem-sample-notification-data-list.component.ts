import { Component, OnInit, Input } from '@angular/core';
import { LogisticModel } from 'app/main/models/logistics/logistic.model';

@Component({
  selector: 'app-problem-sample-notification-data-list',
  templateUrl: './problem-sample-notification-data-list.component.html',
  styleUrls: ['./problem-sample-notification-data-list.component.scss'],
})
export class ProblemSampleNotificationDataListComponent {
  @Input() public logisticsCollections: LogisticModel[];
}
