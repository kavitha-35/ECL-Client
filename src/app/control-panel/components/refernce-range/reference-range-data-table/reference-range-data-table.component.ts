import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReferenceRangeModel } from 'app/control-panel/models/reference-range/reference-range. model';

@Component({
  selector: 'app-reference-range-data-table',
  templateUrl: './reference-range-data-table.component.html',
  styleUrls: ['./reference-range-data-table.component.scss'],
})
export class ReferenceRangeDataTableComponent implements OnInit {
  @Input() isBusy: boolean;
  @Output() editReferenceRangeClicked = new EventEmitter();
  @Output() deleteReferenceRangeClicked = new EventEmitter();

  public referenceRanges: ReferenceRangeModel[];

  displayedColumns: string[] = ['code', 'name', 'units', 'type', 'result', 'min', 'max', 'action'];
  constructor() {}

  ngOnInit(): void {
    this.referenceRanges = [
      {
        testCode: '123',
        testName: 'Blood',
        units: '50mg',
        type: '-',
        result: 'critical',
        minCriticalValue: '180',
        maxCriticalValue: '220',
      },
      {
        testCode: '143',
        testName: 'Hameoglobin',
        units: '10mg',
        type: '-',
        result: 'Normal',
        minCriticalValue: '140',
        maxCriticalValue: '180',
      },
      {
        testCode: '543',
        testName: 'Malaria',
        units: '60mg',
        type: '-',
        result: 'Normal',
        minCriticalValue: '90',
        maxCriticalValue: '150',
      },
    ];
  }

  public onEditReferenceRangeClicked(): void {
    this.editReferenceRangeClicked.emit();
  }

  public onDeleteReferenceRangeClicked(): void {
    this.deleteReferenceRangeClicked.emit();
  }
}
