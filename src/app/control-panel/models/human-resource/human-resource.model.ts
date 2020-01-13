export interface HumanResourceModel {
  name: string;
  department: string;
  dateOfBirth: string;
  email: string;
  alternateEmail: string;
  contactNumber: string;
  alternateContactNumber: string;
  userCredentials: UserCredentials;
  userPrevellege: UserPrevellege;
}
interface UserCredentials {
  defaultUrl: string;
  userName: string;
  password: string;
}
interface UserPrevellege {
  registration: string;
  operation: string;
  finance: string;
  admin: string;
  accession: string;
  departments: string;
  controlPanel: string;
}
