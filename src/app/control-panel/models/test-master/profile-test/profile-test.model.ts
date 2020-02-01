import { CombinedTestModel } from '../combined-test/combined-test.model';

export interface ProfileTestModel {
  profileTestId: number;
  eclDosCode: string;
  testId: string;
  cptCode: string;
  testName: string;
  specimen: string;
  specimenType: string;
  patientFee: string;
  netFee: string;
  combinedTest: CombinedTestModel[];
}
