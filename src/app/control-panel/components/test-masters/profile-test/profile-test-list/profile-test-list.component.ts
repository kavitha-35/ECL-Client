import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';

@Component({
  selector: 'app-profile-test-list',
  templateUrl: './profile-test-list.component.html',
  styleUrls: ['./profile-test-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTestListComponent implements OnInit {
  @Input() tests: ProfileTestModel[];
  constructor() {}

  ngOnInit(): void {}
}
