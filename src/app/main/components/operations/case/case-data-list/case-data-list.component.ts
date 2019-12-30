import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CaseModel } from 'app/main/models/case/case.model';

@Component({
  selector: 'app-case-data-list',
  templateUrl: './case-data-list.component.html',
  styleUrls: ['./case-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseDataListComponent {
  @Input() public caseList: CaseModel[];
  constructor() {}
}
