export class AppointmentModel {
  appointmentId: number;
  patientName: string;
  dob: string;
  age: string;
  email: string;
  landline: string;
  mobile: string;
  appointmentDateTime: string;
  comments: string;
  gender: GenderModel;
  status: StatusModel;
  poBox: string;
  area: string;
  city: CityModel;
  country: CountryModel;
  address: string;
  constructor() {}
}

interface StatusModel {
  statusId: string;
  statusValue: string;
}

interface GenderModel {
  genderId: number;
  genderName: string;
}

interface CityModel {
  cityId: number;
  cityName: string;
}

interface CountryModel {
  countryId: number;
  countryName: string;
}
