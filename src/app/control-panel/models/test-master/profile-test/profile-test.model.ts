import { CombinedTestModel } from '../combined-test/combined-test.model';

export class ProfileTestModel {
  profileTestId: number;
  eclDosCode: string;
  dosCode: string;
  testId: string;
  cptCode: string;
  testName: string;
  specimen: string;
  specimenType: string;
  patientFee: string;
  netFee: string;
  storageId: number;
  departmentId: number;
  storage: {
    storageId: string;
    storageName: string;
  };
  department: {
    departmentId: string;
    departmentName: string;
  };
  currency: string;
  combinedTest?: CombinedTestModel[];
  constructor() {}
}
