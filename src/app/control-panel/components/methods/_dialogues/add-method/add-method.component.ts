import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MethodService } from 'app/control-panel/services/method.service';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-add-method',
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.scss'],
})
export class AddMethodComponent implements OnInit {
  public departments: DepartmentModel[];
  departmentFilter: DepartmentModel[];
  constructor(
    private readonly _dialogRef: MatDialogRef<AddMethodComponent>,
    private readonly _methodService: MethodService,
    private readonly departmentService: DepartmentService,
    ) { }

    ngOnInit(): void {
    this.getDepartments();
    }

  public onAddMethodClicked(method: NgForm): void {
   console.log(method.form.value);
   this._methodService.addMethod(method.form.value).subscribe((data) => {
    this._dialogRef.close();
  });
  }

  public getDepartments(): void {
    this.departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
      this.departmentFilter = this.departments;
      console.log(data);
    });
  }

  public onDepartmentSearch(value: string): void {
    if (value) {
      this.departmentSearch(value);
    } else {
      this.departments = this.departmentFilter;
    }
  }

  public departmentSearch(value: string): void {
    this.departments = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.departmentFilter.length; i++) {
      const option = this.departmentFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.departments.push(option);
      }
    }
  }
}
