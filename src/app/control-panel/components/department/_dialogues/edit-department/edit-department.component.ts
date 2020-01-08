import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { AddDepartmentRequestModel } from 'app/control-panel/models/department/add-department.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDepartmentComponent implements OnInit {
  public selectedForEdit: DepartmentModel;
  constructor(
    private readonly dialogRef: MatDialogRef<EditDepartmentComponent>,
    private readonly _departmentService: DepartmentService,
    @Inject(MAT_DIALOG_DATA) public data: DepartmentModel,
  ) {
    this.selectedForEdit = data;
  }

  ngOnInit(): void {}
  public onEditDepartmentClicked(department: NgForm): void {
    department.form.value.departmentType = '1';
    this._departmentService.updateDepartment(this.selectedForEdit.departmentId, department.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
