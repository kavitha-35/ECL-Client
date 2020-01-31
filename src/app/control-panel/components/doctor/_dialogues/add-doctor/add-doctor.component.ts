import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';
import { OrganisationService } from 'app/control-panel/services/organisation.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent implements OnInit {
  public organisations: OrganisationModel[];
  public countries: LookUpModel[];
  public cities: LookUpModel[];
  public specialities: LookUpModel[];
  constructor(
    private readonly _doctorService: DoctorService,
    private readonly _lookUpService: LookupService,
    private readonly _organisationservice: OrganisationService,
    private readonly dialogRef: MatDialogRef<AddDoctorComponent>,
  ) {}
  ngOnInit(): void {
    this.getCountry();
    this.getCity();
    this.getSpeciality();
    this.getDepartments();
  }

  public onAddDoctorButtonClicked(doctor: NgForm): void {
    console.log(doctor.form.value);
    this._doctorService.addDoctor(doctor.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
  public getCountry(): void {
    this._lookUpService.getLookUp('Country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
      console.log(data);
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
  public getDepartments(): void {
    this._organisationservice.getAllOrganisations().subscribe((data) => {
      this.organisations = data;
    });
  }
}
