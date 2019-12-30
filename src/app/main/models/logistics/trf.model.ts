export interface TestReportFormModel {
  stat            : boolean;
  remarks         : string;
  specimens       : Specimen[];
  isFrozen        : boolean
  isAmbient       : boolean;
  temperature     : string;
  isRefrigerated  : boolean;
}

export interface Specimen {
  name  : string;
  color : string;
  count : number;
}
