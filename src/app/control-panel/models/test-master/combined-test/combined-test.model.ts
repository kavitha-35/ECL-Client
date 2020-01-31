import { IndividualTestModel } from '../individual-test/individual-test.model';

export interface CombinedTestModel {
  combineTestId: number;
  eclDosCode: number;
  testId: number;
  cptCode: string;
  testName: string;
  specimen: string;
  specimenType: string;
  storage: {
    StorageId: string;
    StorageName: string;
  };
  department: {
    departmentId: string;
    departmentName: string;
  };
  patientFee: number;
  netFee: number;
  location: string;
  currency: string;
  reportFormat: number;
  description: string;
  individualTests?: IndividualTestModel[];
}

export interface LinkTestToCombineTestModel {
  groupById: number;
  orderById: number;
  tests: IndividualTestModel[];
}
