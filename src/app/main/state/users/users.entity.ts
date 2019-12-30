import * as faker from 'faker';
import { UserModel } from '../../models/user/user.model';

export class UsersEntity {
  public static getResults(): UserModel[] {
    const result: UserModel[] = [];

    for (let i = 0; i < 50; i++) {
      result.push({
        name: faker.name.firstName(),
        id: faker.random.number(),
        area: faker.address.country(),
        role: {
          id: faker.random.number(),
          name: faker.random.arrayElement(['Lab-User', 'Lab-Admin', 'Doctor']),
        },
        age: faker.random.number(),
        city: faker.address.city(),
        gender: faker.random.arrayElement(['Male', 'Female']),
        place: faker.address.state(),
      });
    }

    return result;
  }
}
