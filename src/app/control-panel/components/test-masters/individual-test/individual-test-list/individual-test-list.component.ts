import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';

@Component({
  selector: 'app-individual-test-list',
  templateUrl: './individual-test-list.component.html',
  styleUrls: ['./individual-test-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualTestListComponent implements OnInit {
  @Input() tests: IndividualTestModel[];
  constructor() {}

  ngOnInit(): void {}
}
