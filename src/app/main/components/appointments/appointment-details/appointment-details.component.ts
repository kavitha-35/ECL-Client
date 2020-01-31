import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { AppointmentModel } from '../../../models/appointment/appointment.model';
import { AppointmentFacade } from '../../../state/appointments/appointment.facade';
import { AppointmentServices } from 'app/main/services/appointment.services';

@Component({
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit, OnDestroy {
  public selectedAppointment : AppointmentModel;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    // private readonly _appointmentFacade: AppointmentFacade,
    private readonly _appointmentService: AppointmentServices
  ) {
    this.selectedAppointment = new AppointmentModel();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this.fetchAppointment(selectedId);
      }
    });
  }

  private fetchAppointment(appointmentId: number): void {
    this._appointmentService.getAppointment(appointmentId).subscribe((data) => {
      this.selectedAppointment = data;
      console.log(data);
    });
  }



  ngOnDestroy(): void {
  }
}
