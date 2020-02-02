import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-operations-dashboard',
  templateUrl: './operations-dashboard.component.html',
  styleUrls: ['./operations-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationsDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
