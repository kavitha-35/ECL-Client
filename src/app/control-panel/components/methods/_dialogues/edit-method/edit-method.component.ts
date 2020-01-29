import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MethodService } from 'app/control-panel/services/method.service';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-edit-method',
  templateUrl: './edit-method.component.html',
  styleUrls: ['./edit-method.component.scss'],
})
export class EditMethodComponent implements OnInit {
  public selectedForEdit: MethodModel;
  public departments: DepartmentModel[];
  constructor(
    private readonly _dialogRef: MatDialogRef<EditMethodComponent>,
    private readonly _methodService: MethodService,
    private readonly _departmentService: DepartmentService,
    @Inject(MAT_DIALOG_DATA) public data: MethodModel,
  ) {
    this.selectedForEdit = data;
    console.log(data);
  }
  ngOnInit(): void {
    this.getDepartment();
  }
  public onEditMethodClicked(method: NgForm): void {
    this._methodService.updateMethod(this.selectedForEdit.methodId, method.form.value).subscribe(() => {
      this._dialogRef.close();
    });
  }
  public getDepartment(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
      console.log(this.departments);
    });
  }
}
