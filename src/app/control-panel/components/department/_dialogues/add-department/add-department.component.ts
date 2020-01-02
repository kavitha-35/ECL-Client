import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDepartmentComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor(private readonly dialogRef: MatDialogRef<AddDepartmentComponent>) { }

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
