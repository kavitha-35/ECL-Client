import { CombinedTestModel } from '../combined-test/combined-test.model';

export interface ProfileTestModel {
  dosCode: string;
  testId: string;
  cptCode: string;
  testName: string;
  specimen: string;
  specimenType: string;
  storage: string;
  department: string;
  patientFee: string;
  netFee: string;
  location: string;
  currency: string;
  combinedTest: CombinedTestModel[];
}
