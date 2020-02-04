export class AppointmentModel {
  appointmentId   : number;
  patientName     : string;
  dob             : string;
  age: string;
  email           : string;
  landline        : string;
  mobile          : string;
  appointmentDateTime : string;
  comments         : string;
  gender          : string;
  status          : StatusModel;
  poBox           : string;
  area            : string;
  city            : string;
  country         : string;
  address: string;
  constructor() {}
}

interface StatusModel {
  statusId        : string;
  statusValue     : string;
}
