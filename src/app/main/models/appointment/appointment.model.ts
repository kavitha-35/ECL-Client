export interface AppointmentModel {
  id              : string;
  name            : string;
  dateOfBirth     : string;
  email           : string;
  phoneNumber     : string;
  mobileNumber    : string;
  from            : string;
  to              : string;
  comment         : string;
  gender          : GenderModel;
  status          : StatusModel;
}

interface GenderModel {
  id              : string;
  name            : string;
}

interface StatusModel {
  id              : string;
  name            : string;
}
