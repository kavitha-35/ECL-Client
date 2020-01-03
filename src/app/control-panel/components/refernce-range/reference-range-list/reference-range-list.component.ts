import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ReferenceRangeModel } from 'app/control-panel/models/reference-range/reference-range. model';

@Component({
  selector: 'app-reference-range-list',
  templateUrl: './reference-range-list.component.html',
  styleUrls: ['./reference-range-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferenceRangeListComponent implements OnInit {
@Input() referenceRange: ReferenceRangeModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
