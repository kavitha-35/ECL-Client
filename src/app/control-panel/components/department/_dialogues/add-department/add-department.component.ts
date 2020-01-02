import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DepartmentService } from './../../../../../providers'

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDepartmentComponent implements OnInit {
  public isPrepaid: boolean;
  public isPostpaid: boolean;

  // todo
  // please set a model schema for department
  public department = {
    departmentName: "",
    departmentType: "",
    doctor: ""
  }
  
  constructor(private readonly dialogRef: MatDialogRef<AddDepartmentComponent>, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.isPrepaid = true;
    this.isPostpaid = false;
  }

  public onAddOrganisationClicked(): void {}

  public addDepartment() {
    console.log('add new department');
    let payload = {
      "departmentName": "Bio chemis",
      "departmentType": "1",
      "doctor": "2"
    }
    this.departmentService.addDepartment(payload).subscribe((response) => {
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
