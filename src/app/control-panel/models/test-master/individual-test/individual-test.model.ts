export interface IndividualTestModel {
  individualTestId: string;
  active: boolean;
  ActiveStatus: string;
  testCategory: TestCategoryModel;
  accrediationSymbol: {
    accrediationSymbolId: string;
    accrediationSymbolValue: string;
  };
  accrediation: boolean;
  testComponent: string;
  processingCenter: ProcessingCenterModel;
  outsourceVendorCode: string;
  equipment: EquipmentModel;
  method: MethodModel;
  unit: UnitModel;
  tatDays: string;
  tatHours: string;
  tatMinutes: string;
  cptAmount: number;
  integrationCode: number;
  comments: string;
  listStatus: string;
}

interface ProcessingCenterModel {
  processingCenterId: string;
  processingCenterName: string;
}

interface EquipmentModel {
  equipmentId: string;
  equipmentName: string;
}

interface TestCategoryModel {
  testCategoryId: string;
  testCategoryName: string;
}

interface MethodModel {
  methodId: string;
  methodName: string;
}

interface UnitModel {
  unitId: string;
  unitName: string;
}
