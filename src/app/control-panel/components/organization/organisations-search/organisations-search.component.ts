import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-organisations-search',
  templateUrl: './organisations-search.component.html',
  styleUrls: ['./organisations-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationsSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
