import { ReferenceRangeModel } from '../../reference-range/reference-range. model';

export interface IndividualTestModel {
  id: string;
  active: string;
  testCategory: string;
  accreditationSymbol: string;
  testComponent: string;
  processingCenter: string;
  outsourceVendorCode: string;
  method: string;
  unit: string;
  referenceRange: string;
  tat: string;
  cptAmount: string;
  integrationCode: string;
  accreditation: string;
  comments: String;
}

interface TestCategory {
  id: string;
  name: string;
}
