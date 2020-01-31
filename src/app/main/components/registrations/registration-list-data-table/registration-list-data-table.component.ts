import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-registration-list-data-table',
  templateUrl: './registration-list-data-table.component.html',
  styleUrls: ['./registration-list-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationListDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
