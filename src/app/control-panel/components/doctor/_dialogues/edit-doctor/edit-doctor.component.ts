import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { DepartmentService } from 'app/control-panel/services/department.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit{
  public selectedForEdit: DoctorModel;
  public countries: LookUpModel[];
  public departments: DepartmentModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<EditDoctorComponent>,
    private readonly _doctorService: DoctorService,
    private readonly _lookUpService: LookupService,
    private readonly _departmentService: DepartmentService,
    private readonly cRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: DoctorModel,
  ) {
    this.selectedForEdit = data;
   }
   ngOnInit(): void {
     this.getCountries();
     this.getDepartment();
  }
  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
      this.cRef.detectChanges();
    });
  }
  public getDepartment(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
      console.log(this.departments);
    });
  }
}
