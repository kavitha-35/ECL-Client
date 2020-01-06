import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-human-resource',
  templateUrl: './edit-human-resource.component.html',
  styleUrls: ['./edit-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditHumanResourceComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }

  public onEditHumanResourceClicked(): void {}
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
