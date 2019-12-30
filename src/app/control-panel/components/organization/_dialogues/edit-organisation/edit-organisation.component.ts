import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-organisation',
  templateUrl: './edit-organisation.component.html',
  styleUrls: ['./edit-organisation.component.scss'],
})
export class EditOrganisationComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor() {}

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
