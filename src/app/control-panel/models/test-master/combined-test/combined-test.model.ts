import { IndividualTestModel } from '../individual-test/individual-test.model';

export interface CombinedTestModel {
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
  reportFormat: string;
  individualTest?: IndividualTestModel[];
}
