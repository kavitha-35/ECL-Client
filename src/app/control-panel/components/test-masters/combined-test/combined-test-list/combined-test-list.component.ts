import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

@Component({
  selector: 'app-combined-test-list',
  templateUrl: './combined-test-list.component.html',
  styleUrls: ['./combined-test-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CombinedTestListComponent implements OnInit {
  @Input() tests: CombinedTestModel[];
  constructor() {}

  ngOnInit(): void {}
}
