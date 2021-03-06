import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';

export class PatientModel {
  id: string;
  registrationType: string;
  fullName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  landline: string;
  mobile: string;
  email: string;
  address: string;
  poBox: string;
  area: string;
  city: string;
  country: number;
  whatsappNumber: string;
  facebook: string;
  instagram: string;
  twitter: string;
  organization: number;
  physician: number;
  fileNo: number;
  clinicalHistory: string;
  testInformation: string;
  memberNumber: string;
  employeeNumber: string;
  validity: string;
  network: string;
  subNetwork: string;
  photo: string;
  emiratesId: string;
  documentUploadId: string;
  drivingLicense: string;
  activeStatus: string;
  tests: CombinedTestModel[];
}
