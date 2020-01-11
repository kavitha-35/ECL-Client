import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDepartmentComponent implements OnInit {
  public departmentTypes: LookUpModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<AddDepartmentComponent>,
    private readonly _departmentService: DepartmentService,
    private readonly _lookUpService: LookupService,
  ) {}

  ngOnInit(): void {
    this.getDepartmentType();
  }

  onAddDepartmentClicked(department: NgForm): void {
    this._departmentService.addDepartment(department.form.value).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getDepartmentType(): void {
    this._lookUpService.getLookUp('DepartmentType').subscribe((data: LookUpModel[]) => {
      this.departmentTypes = data;
      console.log(data);
    });
  }

}
