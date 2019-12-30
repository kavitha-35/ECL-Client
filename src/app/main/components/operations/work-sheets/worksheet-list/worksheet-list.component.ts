import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { WorkSheetModel } from 'app/main/models/work-sheet/work-sheet.model';

@Component({
  selector: 'app-worksheet-list',
  templateUrl: './worksheet-list.component.html',
  styleUrls: ['./worksheet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksheetListComponent {
  @Input() public workSheetList: WorkSheetModel[];
  constructor() {}
}
