import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-creditnotes-list-data-table',
  templateUrl: './creditnotes-list-data-table.component.html',
  styleUrls: ['./creditnotes-list-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditnotesListDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
