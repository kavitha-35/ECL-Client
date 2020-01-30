import * as faker from 'faker';

import { AppointmentModel } from '../../models/appointment/appointment.model';

export class AppointmentEntity {
  public static getAppointmentList(): AppointmentModel[] {
    const appointmentList: AppointmentModel[] = [];

    for (let i = 0; i < 500; i++) {
      appointmentList.push({
        appointmentId: faker.random.number(),
        mobile: faker.phone.phoneNumber(),
        gender: '1',
        dob: faker.date.past().toDateString(),
        email: faker.internet.email(),
        landline: faker.phone.phoneNumber(),
        patientName: faker.name.firstName(),
        comments: faker.random.words(25),
        poBox: faker.date.future().toDateString(),
        appointmentDateTime: faker.date.future().toDateString(),
        area: faker.name.firstName(),
        city: faker.name.firstName(),
        country: faker.name.firstName(),
        status: { statusId: '1', statusValue: faker.random.arrayElement(['Pending', 'Cancelled', 'Confirmed']) }
      })
    }

    return appointmentList;
  }
}
