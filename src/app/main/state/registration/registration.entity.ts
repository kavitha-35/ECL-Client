import * as faker from 'faker';

import { LinkTestModel } from '../../models/tests/link-test.model';
import { RegistrationModel } from '../../models/registration/registration.model';

export class RegistrationEntity {
  public static getRegistrationList(): RegistrationModel[] {
    const registrationList: RegistrationModel[] = [];

    for (let i = 0; i < 200; i++) {
      const searchResult: LinkTestModel[] = [];

      for (let j = 0; j < 10; j++) {
        const childCount = faker.random.number() % 5;
        const nestedTests: LinkTestModel[] = [];

        for (let k = 0; k < childCount; k++) {
          nestedTests.push({
            id: faker.random.number().toString(),
            name: faker.random.alphaNumeric(10),
            price: faker.random.number().toString(),
            averageTat: faker.random.number().toString(),
            container: { id: faker.random.number().toString(), name: faker.random.word() },
            sample: { id: faker.random.number().toString(), name: faker.random.word() },
            isOutSourced: faker.random.number() % 2 === 0,
            tests: null,
            isExpanded: false
          });
        }

        searchResult.push({
          id: faker.random.number().toString(),
          name: faker.random.alphaNumeric(10),
          price: faker.random.number().toString(),
          averageTat: faker.random.number().toString(),
          container: { id: faker.random.number().toString(), name: faker.random.word() },
          sample: { id: faker.random.number().toString(), name: faker.random.word() },
          isOutSourced: faker.random.number() % 2 === 0,
          isExpanded: false,
          tests: faker.random.number() % 2 === 0 ? null : nestedTests,
        });
      }

      registrationList.push({
        id: faker.random.number().toString(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        mobileNumber: faker.phone.phoneNumber(),
        dateOfBirth: faker.date.past().toDateString(),
        area: faker.address.city(),
        postalCode: faker.address.zipCode().toString(),
        city: faker.address.city(),
        gender: { id: '1', name: 'Male' },
        status: { id: '1', name: faker.random.arrayElement(['Pending Accession', 'Pending Payment', 'Waiting List', 'Authorization', 'Problem', 'Completed']) },
        referralDoctor: { id: faker.random.number().toString(), name: faker.name.firstName() },
        referralOrganization: { id: faker.random.number().toString(), name: faker.company.companyName() },
        tests: searchResult
      });
    }

    return registrationList;
  }
}
