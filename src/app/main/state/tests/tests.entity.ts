import * as faker from 'faker';
import { LinkTestModel } from '../../models/tests/link-test.model';

export class TestsEntity {
  public static getSearchResults(): LinkTestModel[] {
    const searchResult: LinkTestModel[] = [];

    for (let i = 0; i < 10; i++) {
      const childCount = faker.random.number() % 5;
      const nestedTests: LinkTestModel[] = [];

      for (let j = 0; j < childCount; j++) {
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

    return searchResult;
  }
}
