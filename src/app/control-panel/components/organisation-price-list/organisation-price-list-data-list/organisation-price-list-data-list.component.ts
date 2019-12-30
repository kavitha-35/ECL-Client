import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { OrganisationPriceModel } from 'app/control-panel/models/organisation-price/organisation-price.model';

@Component({
  selector: 'app-organisation-price-list-data-list',
  templateUrl: './organisation-price-list-data-list.component.html',
  styleUrls: ['./organisation-price-list-data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationPriceListDataListComponent implements OnInit {
  @Input() organisations: OrganisationPriceModel[];
  constructor() {}

  ngOnInit(): void {}
}
