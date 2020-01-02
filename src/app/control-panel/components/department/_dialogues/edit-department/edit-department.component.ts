import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDepartmentComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }
  public onEditDepartmentClicked(): void {}
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
