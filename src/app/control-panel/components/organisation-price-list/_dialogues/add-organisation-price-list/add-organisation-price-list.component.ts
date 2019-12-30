import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-organisation-price-list',
  templateUrl: './add-organisation-price-list.component.html',
  styleUrls: ['./add-organisation-price-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddOrganisationPriceListComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor(private readonly dialogRef: MatDialogRef<AddOrganisationPriceListComponent>) { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }
  public onAddOrganisationClicked(): void {}
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
