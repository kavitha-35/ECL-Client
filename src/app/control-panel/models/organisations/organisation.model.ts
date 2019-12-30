export interface OrganisationModel {
  id: string;
  clinicName: string;
  type: string;
  address: string;
  postBox: string;
  telephone: string;
  fax: string;
  web: string;
  area: string;
  region: string;
  country: string;
  salesRepresentative: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  businessHours: string;
  remarks: string;
  localInformation: LocalInformation;
  finance: Finance;
  userCredentials: UserCredentials;
}

interface LocalInformation {
  language: string;
  timeZone: string;
}

interface Finance {
  currency: string;
  paymentMode: string;
  paymentType: string;
  creditLimit: string;
  currentDue: string;
  revenueTarget: string;
  reportAndBillStatus: string;
}

interface UserCredentials {
  userId: string;
  password: string;
  branch: string;
}
