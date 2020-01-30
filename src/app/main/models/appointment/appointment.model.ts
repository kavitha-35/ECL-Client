export class AppointmentModel {
  appointmentId   : number;
  patientName     : string;
  dob             : string;
  email           : string;
  landline        : string;
  mobile          : string;
  appointmentDate : string;
  appointmentTime : string;
  comments         : string;
  gender          : string;
  status          : StatusModel;
  poBox           : string;
  area            : string;
  city            : string;
  country         : string;
  constructor(){}
}

interface StatusModel {
  statusId        : string;
  statusValue     : string;
}
