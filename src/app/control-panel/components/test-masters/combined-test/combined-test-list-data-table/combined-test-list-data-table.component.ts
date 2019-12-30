import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestModel } from 'app/control-panel/models/tests/test.model';

@Component({
  selector: 'app-combined-test-list-data-table',
  templateUrl: './combined-test-list-data-table.component.html',
  styleUrls: ['./combined-test-list-data-table.component.scss'],
})
export class CombinedTestListDataTableComponent implements OnInit {
  @Input() tests: TestModel[];
  @Input() isBusy: boolean;
  @Output() editTestClicked = new EventEmitter<TestModel>();
  @Output() deleteTestClicked = new EventEmitter<string>();

  displayedColumns: string[] = [
    'id',
    'name',
    'testCode',
    'shortText',
    'integrationCode',
    'description',
    'price',
    'minimumSellingPrice',
    'cost',
    'action',
  ];

  constructor() {}

  ngOnInit(): void {}

  public onEditTestClicked(test: TestModel): void {
    this.editTestClicked.emit(test);
  }

  public onDeleteTestClicked(testId: string): void {
    this.deleteTestClicked.emit(testId);
  }
}
