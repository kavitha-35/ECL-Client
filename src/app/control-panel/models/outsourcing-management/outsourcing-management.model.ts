import { ɵngrx_modules_store_store_a } from '@ngrx/store';

export interface OutsourcingManagementModel {
  id: string;
  basicInformation: BasicInformationModel;
  paymentInformation: PaymentInformationModel;
  loginInformation: LoginInformationModel;
}

interface BasicInformationModel {
  labName: string;
  relation: boolean;
  address: string;
  postBox: string;
  telephone: string;
  fax: string;
  web: string;
  region: string;
  country: string;
  interfacingType: boolean;
  salesRepresentative: string;
  courier: string;
  contactMobile: string;
  mail: string;
}

interface PaymentInformationModel {
  paymentMode: string;
  creditPeriod: string;
}

interface LoginInformationModel {
  url: string;
  userName: string;
  password: string;
}
