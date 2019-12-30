export interface TestModel {
  id                 : number;
  name               : string;
  testCode           : string;
  shortText          : string;
  categoryId         : number;
  integrationCode    : string;
  description        : string;
  isAutoDispatch     : boolean;
  isBillOnlyTest     : boolean;
  isReportMasked     : boolean;
  isNABLTest         : boolean;
  isNA               : boolean;
  isPrintPriorityNA  : boolean;
  isOutSourceTest    : boolean;
  isDiscardDiscount  : boolean;
  isCAP              : boolean;
  isNoReportToPatient: boolean;
  price              : number;
  price2             : number;
  minimumSellingPrice: number;
  cost               : number;
  revenueCAP         : number;
  targetTATDays      : number;
  targetTATHours     : number;
  targetTATMinutes   : number;
  sampleId           : number;
}
