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
  storage: string;
  department: string;
  currency: string;
  combinedTest: CombinedTestModel[];
}
