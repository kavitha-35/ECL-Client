import { ReferenceRangeModel } from '../../reference-range/reference-range. model';

export interface IndividualTestModel {
  individualTestId: number;
  ActiveStatus: string;
  testCategoryId: number;
  testCategory:{
    testCategoryId: string;
    testCategoryName: string;
  };
  accreditationSymbol: number;
  testComponent: string;
  processingCenter: {
    processingCenterId: string;
    processingCenterName: string;
  };
  outsourceVendorCode: string;
  method: {
    methodId: string;
    methodName: string;
  };
  unit: {
    unitId: string;
    unitName: string;
  };
  tat: string;
  cptAmount: number;
  integrationCode: number;
  comments: string;
}

interface TestCategory {
  id: string;
  name: string;
}
