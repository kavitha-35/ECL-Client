export interface DoctorModel {
  id: string;
  doctorName: string;
  active: string;
  organization: OrganizationModel;
  dateOfBirth: string;
  dateOfAnniversary: string;
  doctorSpeciality: string;
  email: string;
  telephone: string;
  mobileNumber: string;
  whatsappNumber: string;
  address: AddressModel;
  socialmedia: SocialMediaModel;
  loginAccess: LoginModel;
}

interface OrganizationModel {
  organizationId: string;
}

interface AddressModel {
  address: string;
  postBox: string;
  area: string;
  city: string;
  country: string;
}

interface SocialMediaModel {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface LoginModel {
  userName: string;
  password: string;
}
