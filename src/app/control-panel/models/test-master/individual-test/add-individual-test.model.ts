export interface AddIndividualTestModel {
  active: boolean;
  testCategoryId: number;
  accrediationId: number;
  individualTestName: string;
  processingCentreId: number;
  methodId: number;
  unitId: number;
  referenceRangeId: number;
  tat: number;
  cptAmount: number;
  integrationCode: number;
  comments: string;
  outsourceVendorCode: string;
}
