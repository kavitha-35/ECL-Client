export interface AddTestRequestModel {
  id                    : number;
  name                  : string;
  cost                  : number;
  isNA                  : boolean;
  price                 : number;
  isCAP                 : boolean;
  testCode              : string;
  shortText             : string;
  categoryId            : number;
  revenueCAP            : number;
  isNABLTest            : boolean;
  description           : string;
  departmentId          : number;
  targetTATDays         : number;
  targetTATHours        : number;
  isAutoDispatch        : boolean;
  isBillOnlyTest        : boolean;
  isReportMasked        : boolean;
  integrationCode       : string;
  isOutSourceTest       : boolean;
  targetTATMinutes      : number;
  isPrintPriorityNA     : boolean;
  isDiscardDiscount     : boolean;
  minimumSellingPrice   : number;
  isNoReportToPatient   : boolean;
}
