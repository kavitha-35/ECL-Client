import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { AppointmentModel } from '../../../models/appointment/appointment.model';
import { AppointmentFacade } from '../../../state/appointments/appointment.facade';

@Component({
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit, OnDestroy {
  public selectedAppointment       : AppointmentModel;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _appointmentFacade: AppointmentFacade,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((queryParams) => {
      const selectedId = queryParams['id'];
      if (selectedId) {
        this._appointmentFacade.appointments$.pipe(take(1)).subscribe((data) => {
          this.selectedAppointment = data.find((x) => x.id === selectedId);
        });
      }
    });
  }

  ngOnDestroy(): void {
  }
}
