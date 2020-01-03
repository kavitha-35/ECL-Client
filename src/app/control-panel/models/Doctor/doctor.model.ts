export interface DoctorModel {
  id: string;
  designation: string;
  doctorName: string;
  emailId: string;
  address: string;
  telephone: string;
  zipCode: string;
  area: string;
  country: string;
  dateOfBirth: string;
  dateofAnniversary: string;
  doctorPassKey: string;
  doctorSpeciality: string;
  department: string;
  visitingDays: string;
  remarks: string;
  signature: SignatureModel;
  login: LoginModel;
}

interface SignatureModel {
  signatureImage: string;
}

interface LoginModel {
  userName: string;
  password: string;
}
