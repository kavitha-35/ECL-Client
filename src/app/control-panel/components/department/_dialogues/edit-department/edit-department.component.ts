import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentService } from './../../../../../providers'

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
    departmentName: "",
    departmentType: "",
    doctor: ""
  }

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }

  public onEditDepartmentClicked(): void {}

  public editDepartment() {
    console.log('edit department');
    let departmentId = 1;
    let payload = {
      "departmentName": "Bio chemis",
      "departmentType": "1",
      "doctor": "2"
    };
    this.departmentService.updateDepartment(departmentId, payload).subscribe((response) => {
      if (response) {
        console.log(response)
      }
    }, (error) => {
    });
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
