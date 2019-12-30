import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-organisation-price-list',
  templateUrl: './edit-organisation-price-list.component.html',
  styleUrls: ['./edit-organisation-price-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditOrganisationPriceListComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }
  public onEditOrganisationClicked(): void {}
  public paymentType(payment: string): void {
    if (payment === 'postpaid') {
      this.isPostpaid = true;
      this.isPrepaid = false;
    } else {
      this.isPrepaid = true;
      this.isPostpaid = false;
    }
  }
}
