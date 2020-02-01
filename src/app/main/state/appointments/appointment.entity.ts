import * as faker from 'faker';

import { AppointmentModel } from '../../models/appointment/appointment.model';

export class AppointmentEntity {
  public static getAppointmentList(): AppointmentModel[] {
    const appointmentList: AppointmentModel[] = [];
    return appointmentList;
  }
}
