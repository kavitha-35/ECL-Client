import * as faker from 'faker';

import { HomeCollectionModel } from '../../models/home-collections/home-collection.model';

export class HomeCollectionEntity {
  public static getHomeCollectionList(): HomeCollectionModel[] {
    const homeCollectionList: HomeCollectionModel[] = [];

    for (let i = 0; i < 25; i++) {
      homeCollectionList.push({
        id: faker.random.number().toString(),
        area: faker.address.streetName(),
        city: faker.address.city(),
        country: faker.address.country(),
        scheduleDate: faker.date.future().toDateString(),
        comment: faker.random.words(100),
        dateOfBirth: faker.date.past().toDateString(),
        email: faker.internet.email(),
        gender: { id: '1', name: 'Male' },
        mobileNumber: faker.phone.phoneNumber(),
        patientName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        phoneNumber: faker.phone.phoneNumber(),
        postalCode: faker.address.zipCode(),
        status: {
          id: faker.random.number().toString(),
          name: faker.random.arrayElement(['Unassigned', 'Assigned', 'In Progress', 'Completed', 'Cancelled'])
        },
        referral: {
          doctor: {
            id: faker.random.number().toString(),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`
          },
          organization: {
            id: faker.random.number().toString(),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          },
        },
      });
    }

    return homeCollectionList;
  }
}
