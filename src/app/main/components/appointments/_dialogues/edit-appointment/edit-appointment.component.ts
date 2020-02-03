import { Component, OnInit, Inject } from '@angular/core';

import { Time } from '../../../../models/appointment/time.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { AppointmentModel } from 'app/main/models/appointment/appointment.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { AppointmentServices } from 'app/main/services/appointment.services';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.scss'],
})
export class EditAppointmentComponent implements OnInit {
  public time: Time[];
  public appointment: AppointmentModel = new AppointmentModel();
  public cities: LookUpModel[];
  cityFilter: LookUpModel[];
  public countries: LookUpModel[];
  countryFilter: LookUpModel[];

  constructor(
    private readonly _dialogRef: MatDialogRef<AppointmentModel>,
    private readonly appointmentService: AppointmentServices,
    private readonly _lookUpService: LookupService,
    @Inject(MAT_DIALOG_DATA) private readonly data: any
  ) {}


  ngOnInit(): void {
    this.appointment = this.data;
    this.getCountries();
    this.getCities();
  }

  public onEditAppointmentClicked(): void {
    console.log('edit appointment payload', this.appointment);
    this.appointmentService.updateAppointment(this.appointment.appointmentId, this.appointment).subscribe(() => {
      this._dialogRef.close();
    });
  }

  public getCities(): void {
    this._lookUpService.getLookUp('city').subscribe((data: LookUpModel[]) => {
      this.cities = data;
      this.cityFilter = this.cities;
      console.log(data);
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
      this.countryFilter = this.countries;
      console.log(data);
    });
  }
  public onCountrySearch(value: string): void {
    if (value) {
      this.countrySearch(value);
    } else {
      this.countries = this.countryFilter;
    }
  }

  public countrySearch(value: string): void {
    this.countries = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.countryFilter.length; i++) {
      const option = this.countryFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.countries.push(option);
      }
    }
  }
  public onCitySearch(value: string): void {
    if (value) {
      this.citySearch(value);
    } else {
      this.cities = this.cityFilter;
    }
  }

  public citySearch(value: string): void {
    this.cities = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.cityFilter.length; i++) {
      const option = this.cityFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.cities.push(option);
      }
    }
  }
}
