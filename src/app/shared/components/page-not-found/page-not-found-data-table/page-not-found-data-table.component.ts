import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-not-found-data-table',
  templateUrl: './page-not-found-data-table.component.html',
  styleUrls: ['./page-not-found-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundDataTableComponent implements OnInit {
  value: any[];
  displayedColumns: [
    'id',
    'name',
    'type',
    'postBox',
    'address',
    'email',
    'area',
    'contactPerson',
    'contactNumber',
    'salesRepresentative',
    'action',
  ];
  constructor() {}

  ngOnInit(): void {}
}
