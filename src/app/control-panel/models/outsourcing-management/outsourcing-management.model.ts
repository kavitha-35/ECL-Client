export interface OutsourcingManagementModel {
  outsourceId: number;
  labCode: string;
  labName: string;
  relation: string;
  address: string;
  poNumber: string;
  telephone: string;
  fax: string;
  web: string;
  region: RegionModel;
  country: CountryModel;
  interfacingType: string;
  courier: [];
  contactPerson: string;
  email: string;
  paymentMethod: string;
  creditPeriod: string;
  creditLimit: string;
  url: string;
  username: string;
  passowrd: string;
}

interface RegionModel {
  regionId: number;
  regionName: string;
}

interface CountryModel {
  countryId: number;
  countryName: string;
}
