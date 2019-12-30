import * as faker from 'faker';
import { LogisticModel } from '../../models/logistics/logistic.model';

export class LogisticsEntity {
  public static getLogisticsList(): LogisticModel[] {
    const logisticsList: LogisticModel[] = [];

    for (let i = 0; i < 75; i++) {
      logisticsList.push({
        id: faker.random.number().toString(),
        modifiedOn: faker.date.past(),
        scheduledOn: faker.date.future().toDateString(),
        calledBy: { id: faker.random.number().toString(), name: faker.name.firstName() },
        driver: { id: faker.random.number().toString(), name: faker.name.firstName() },
        clinic: { id: faker.random.number().toString(), name: faker.company.companyName() },
        status: {
          id: faker.random.number().toString(),
          name: faker.random.arrayElement(['Open', 'In Progress', 'Cancelled', 'Billing', 'Pending Accession']),
        },
        area: faker.address.state(),
        city : faker.address.city(),
        country: faker.address.country(),
        deliverdTime: faker.date.future().toDateString(),
        deliveredTo: faker.name.firstName(),
        email: faker.random.arrayElement(['a@a.com', 'b@b.com', 'c@c.com']),
        landLine: faker.phone.phoneNumber(),
        mobile: faker.phone.phoneNumber(),
        organization: faker.company.companyName(),
        pickUpTime: faker.date.future().toDateString()
      });
    }

    return logisticsList;
  }
}
