import { CombinedTestModel } from '../combined-test/combined-test.model';
import { IndividualTestModel } from '../individual-test/individual-test.model';

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
  storage: {
    StorageId: string;
    StorageName: string;
  };
  department: {
    departmentId: string;
    departmentName: string;
  };
  currency: string;
  combinedTest?: CombinedTestModel[];
}
