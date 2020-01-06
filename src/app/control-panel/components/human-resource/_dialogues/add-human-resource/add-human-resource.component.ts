import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-human-resource',
  templateUrl: './add-human-resource.component.html',
  styleUrls: ['./add-human-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddHumanResourceComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor(private readonly dialogRef: MatDialogRef<AddHumanResourceComponent>) { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }
  public onAddHumanResourceClicked(): void {}
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
