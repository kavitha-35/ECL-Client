import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { DISPLAY_MODE } from '../../models/constants';
import { AppointmentModel } from '../../models/appointment/appointment.model';
import { AppointmentFacade } from '../../state/appointments/appointment.facade';
import { AddAppointmentComponent } from './_dialogues/add-appointment/add-appointment.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  public showListView     : boolean;
  public pageEvent        : PageEvent;
  public pageSizeOptions  : number[];
  public appointments$    : Observable<AppointmentModel[]>;

  constructor(
    private readonly _router: Router,
    private readonly _matDialog: MatDialog,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _appointmentsFacade: AppointmentFacade,
  ) {
    this.pageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;
    this.pageSizeOptions = [10, 25, 50, 100];
  }

  ngOnInit(): void {
    this.appointments$ = this._appointmentsFacade.appointments$;
    this._appointmentsFacade.loadAppointments();
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.showListView = queryParams['view'] === DISPLAY_MODE.LIST;
    });
  }

  public onShowListViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.LIST } });
  }

  public onShowTableViewButtonClicked(): void {
    this._router.navigate([], { queryParams: { view: DISPLAY_MODE.TABLE } });
  }

  public onAddAppointmentButtonClicked(): void {
    const matDialogConfig: MatDialogConfig = {
      panelClass: 'mat-dialogue-no-padding',
      width: '1400px',
      height: '640px',
    };

    this._matDialog.open(AddAppointmentComponent, matDialogConfig);
  }

  public async onRowSelected(appointmentId: string): Promise<void> {
    await this._router.navigate(['/main/appointment-details'], { queryParams: { id: appointmentId } });
  }
}
