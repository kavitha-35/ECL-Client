import * as faker from 'faker';

import { AppointmentModel } from '../../models/appointment/appointment.model';

export class AppointmentEntity {
  public static getAppointmentList(): AppointmentModel[] {
    const appointmentList: AppointmentModel[] = [];

    for (let i = 0; i < 500; i++) {
      appointmentList.push({
        id: faker.random.number().toString(),
        phoneNumber: faker.phone.phoneNumber(),
        gender: { id: '1', name: 'Male' },
        dateOfBirth: faker.date.past().toDateString(),
        email: faker.internet.email(),
        mobileNumber: faker.phone.phoneNumber(),
        name: faker.name.firstName(),
        comment: faker.random.words(25),
        from: faker.date.future().toDateString(),
        to: faker.date.future().toDateString(),
        status: { id: '1', name: faker.random.arrayElement(['Pending', 'Cancelled', 'Confirmed']) }
      })
    }

    return appointmentList;
  }
}
