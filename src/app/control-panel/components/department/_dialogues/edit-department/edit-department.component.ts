import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { NgForm } from '@angular/forms';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDepartmentComponent implements OnInit {
  public departmentTypes: LookUpModel[];
  public selectedForEdit: DepartmentModel;
  constructor(
    private readonly dialogRef: MatDialogRef<EditDepartmentComponent>,
    private readonly _departmentService: DepartmentService,
    private readonly _lookUpService: LookupService,
    private readonly cRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: DepartmentModel,
  ) {
    this.selectedForEdit = data;
  }

  ngOnInit(): void {
    this.getDepartmentType();
  }
  public onEditDepartmentClicked(department: NgForm): void {
    console.log(department.form.value);
    this._departmentService.updateDepartment(this.selectedForEdit.departmentId, department.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }

  public getDepartmentType(): void {
    this._lookUpService.getLookUp('DepartmentType').subscribe((data: LookUpModel[]) => {
      this.departmentTypes = data;
      this.cRef.detectChanges();
    });
  }
}
