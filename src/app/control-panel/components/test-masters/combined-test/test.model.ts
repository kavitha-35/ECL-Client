import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { LinkTestToCombineTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

export class CombinedTest {
  eclDosCode: number;
  testId: number;
  cptCode: string;
  testName: string;
  specimen: string;
  specimenType: string;
  storage: number;
  department: number;
  patientFee: number;
  netFee: number;
  currency: number;
  reportFormat: number;
  description: string;
  orderById: number;
  groupById: number;
  individualTests: IndividualTestModel[];
  constructor() {}
}

export class LinkTestToCombineTest {
  groupById: number;
  orderById: number;
  tests: IndividualTestModel[];
  constructor() {}
}
