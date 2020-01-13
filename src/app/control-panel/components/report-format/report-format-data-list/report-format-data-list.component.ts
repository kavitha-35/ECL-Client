import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ReportFormatModel } from 'app/control-panel/models/report-format/report-format.model';

@Component({
  selector: 'app-report-format-data-list',
  templateUrl: './report-format-data-list.component.html',
  styleUrls: ['./report-format-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFormatDataListComponent implements OnInit {
  @Input() reportFormat: ReportFormatModel[];
  constructor() {}

  ngOnInit(): void {}
}
