import { Component, OnInit } from '@angular/core';

import { Time } from '../../../../models/appointment/time.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { MatDialogRef } from '@angular/material';
import { AppointmentServices } from 'app/main/services/appointment.services';
import { AppointmentModel } from 'app/main/models/appointment/appointment.model';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  public time: Time[];
  public cities: LookUpModel[];
  public countries: LookUpModel[];
  public appointment: AppointmentModel = new AppointmentModel();

  constructor(
    private readonly _dialogRef: MatDialogRef<AppointmentModel>,
    private readonly appointmentService: AppointmentServices,
    private readonly _lookUpService: LookupService,
  ) {}


  ngOnInit(): void {
    this.initializeTime();
  }

  public onAddAppointmentClicked(): void {
    console.log('add appointment payload', this.appointment);
    this.appointmentService.addAppointment(this.appointment).subscribe(() => {
      this._dialogRef.close();
    });
  }

  public getCities(): void {
    this._lookUpService.getLookUp('city').subscribe((data: LookUpModel[]) => {
      this.cities = data;
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
    });
  }

  private initializeTime(): void {
    this.time = [
      { value: '1', viewValue: '1' },
      { value: '2', viewValue: '2' },
      { value: '3', viewValue: '3' },
      { value: '4', viewValue: '4' },
      { value: '5', viewValue: '5' },
      { value: '6', viewValue: '6' },
      { value: '7', viewValue: '7' },
      { value: '8', viewValue: '8' },
      { value: '9', viewValue: '9' },
      { value: '10', viewValue: '10' },
      { value: '11', viewValue: '11' },
      { value: '12', viewValue: '12' },
    ];
  }
}
