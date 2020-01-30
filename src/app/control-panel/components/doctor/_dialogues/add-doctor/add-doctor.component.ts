import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorModel } from 'app/control-panel/models/Doctor/doctor.model';
import { DoctorService } from 'app/control-panel/services/doctor.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { OrganisationModel } from 'app/control-panel/models/organisations/organisation.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss'],
})
export class AddDoctorComponent implements OnInit {
  public organizations: OrganisationModel[];
  public countries: LookUpModel[];
  public cities: LookUpModel[];
  public specialities: LookUpModel[];
  constructor(
    private readonly doctorService: DoctorService,
    private readonly lookUpService: LookupService,
    private readonly dialogRef: MatDialogRef<AddDoctorComponent>,
  ) {}
  ngOnInit(): void {
    this.getCountry();
    this.getCity();
    this.getSpeciality();
  }

  public onAddDoctorButtonClicked(doctor: NgForm): void {
    console.log(doctor.form.value);
    this.doctorService.addDoctor(doctor.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
  public getCountry(): void {
    this.lookUpService.getLookUp('Country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
      console.log(data);
    });
  }
  public getCity(): void {
    this.lookUpService.getLookUp('City').subscribe((data: LookUpModel[]) => {
      this.cities = data;
      console.log(data);
    });
  }
  public getSpeciality(): void {
    this.lookUpService.getLookUp('speciality').subscribe((data: LookUpModel[]) => {
      this.specialities = data;
      console.log(data);
    });
  }
}
