import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { NgForm } from '@angular/forms';
import { OrganisationService } from 'app/control-panel/services/organisation.service';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss'],
})
export class EditDoctorComponent implements OnInit {
  public organizations: OrganisationModel[];
  public selectedForEdit: DoctorModel;
  public countries: LookUpModel[];
  public departments: DepartmentModel[];
  public cities: LookUpModel[];
  public specialities: LookUpModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<EditDoctorComponent>,
    private readonly _oranizationService: OrganisationService,
    private readonly _doctorService: DoctorService,
    private readonly _lookUpService: LookupService,
    private readonly cRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: DoctorModel,
  ) {
    this.selectedForEdit = data;
  }
  ngOnInit(): void {
    this.getCountries();
    this.getCity();
    this.getSpeciality();
  }
  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
      this.cRef.detectChanges();
    });
  }
  public getCity(): void {
    this._lookUpService.getLookUp('City').subscribe((data: LookUpModel[]) => {
      this.cities = data;
      console.log(data);
    });
  }
  public getSpeciality(): void {
    this._lookUpService.getLookUp('speciality').subscribe((data: LookUpModel[]) => {
      this.specialities = data;
      console.log(data);
    });
  }
  public onEditDoctorClicked(doctor: NgForm): void {
    console.log(doctor.form.value);
    this._doctorService.updateDoctor(this.selectedForEdit.id, doctor.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
  public getDepartments(): void {
    this._oranizationService.getAllOrganisations().subscribe((data) => {
      this.organizations = data;
    });
  }
}
