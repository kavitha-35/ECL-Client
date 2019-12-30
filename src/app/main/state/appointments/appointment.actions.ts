import { Action } from '@ngrx/store';

export enum AppointmentActionTypes {
  LoadAppointmentList    = '[Appointments] Load Appointment List'
}

export class LoadAppointmentList implements Action {
  public readonly type = AppointmentActionTypes.LoadAppointmentList;
}

export type AppointmentActions = LoadAppointmentList;
