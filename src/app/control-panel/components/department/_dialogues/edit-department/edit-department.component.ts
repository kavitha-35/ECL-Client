import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentService } from 'app/control-panel/services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDepartmentComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;

  // todo
  // please set a model schema for department
  public department = {
    departmentName: '',
    departmentType: '',
    doctor: ''
  }
  constructor(
    private _departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }

  public onEditDepartmentClicked(): void {}

  public editDepartment(): void {
  }

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
