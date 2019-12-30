import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.scss'],
})
export class AddOrganisationComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;

  constructor(private readonly dialogRef: MatDialogRef<AddOrganisationComponent>) {}

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
