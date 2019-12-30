import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { CaseModel } from '../../../../../models/case/case.model';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent implements OnInit {
  public caseList: CaseModel[];
  public displayedColumns: string[];

  public ngOnInit(): void {
    this.displayedColumns = ['id', 'name', 'email', 'organization', 'reportedBy', 'rootCause', 'status'];
    this._initializeCaseList();
  }

  private _initializeCaseList(): void {
    this.caseList = [];
    for (let i = 0; i < 5; i++) {
      this.caseList.push({
        id: faker.random.number().toString(),
        email: faker.internet.email(),
        escalatedTo: faker.name.firstName(),
        fileNumber: faker.random.number().toString(),
        mobile: faker.phone.phoneNumber().toString(),
        name: faker.name.firstName(),
        organization: faker.company.companyName(),
        physician: faker.name.firstName(),
        preventiveAction: faker.random.words(10),
        priority: faker.random.number().toString(),
        problem: faker.random.word(),
        reportedBy: faker.name.firstName(),
        rootCause: faker.random.word(),
        status: faker.random.arrayElement(['Open', 'On Hold', 'Closed']),
      });
    }
  }
}
