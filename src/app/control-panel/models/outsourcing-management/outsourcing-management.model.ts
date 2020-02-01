export class AddOutsourcingManagementModel {
  outsourceId: number;
  labCode: string;
  labName: string;
  relation: string;
  address: string;
  area: string;
  city: string;
  poNumber: string;
  telephone: string;
  mobileNumber: string;
  fax: string;
  web: string;
  region: string;
  country: string;
  interfacingType: string;
  courierId: string;
  contactPerson: string;
  contactPersons: ContactPerson[];
  email: string;
  paymentMethod: string;
  creditPeriod: string;
  creditLimit: string;
  url: string;
  userName: string;
  password: string;
  constructor() {}
}

interface CountryModel {
  countryId: number;
  countryName: string;
}

interface CityModel {
  cityId: number;
  cityName: string;
}

interface CourierModel {
  courierId: number;
  courierName: string;
}

export class ContactPerson {
  designation: string;
  courierId: string;
  mobile: string;
  contactPersonName: string;
  dateOfBirth?: string;
  dateOfAnniversary?: string;
  email: string;
  departmentId: number;
  telephone?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;

  constructor() {}
}

export class OutsourcingManagementModel {
  outsourceId: number;
  labCode: string;
  labName: string;
  relation: string;
  address: string;
  area: string;
  city: CityModel;
  poNumber: string;
  telephone: string;
  mobileNumber: string;
  fax: string;
  web: string;
  region: string;
  country: CountryModel;
  interfacingType: string;
  courier: CourierModel;
  contactPerson: string;
  contactPersons: ContactPerson[];
  email: string;
  paymentMethod: string;
  creditPeriod: string;
  creditLimit: string;
  url: string;
  userName: string;
  password: string;
  constructor() {}
}
