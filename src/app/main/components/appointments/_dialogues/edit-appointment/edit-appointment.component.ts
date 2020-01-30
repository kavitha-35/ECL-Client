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
  public cities: LookUpModel[];
  public countries: LookUpModel[];
  public appointment: AppointmentModel = new AppointmentModel();

  constructor(
    private readonly _dialogRef: MatDialogRef<AppointmentModel>,
    private readonly appointmentService: AppointmentServices,
    private readonly _lookUpService: LookupService,
    @Inject(MAT_DIALOG_DATA) private readonly data: any
  ) {}


  ngOnInit(): void {
    this.appointment = this.data;
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
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
    });
  }
}
