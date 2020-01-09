import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-organisation-price-list',
  templateUrl: './edit-organisation-price-list.component.html',
  styleUrls: ['./edit-organisation-price-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditOrganisationPriceListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public onEditOrganisationClicked(): void {}
}
