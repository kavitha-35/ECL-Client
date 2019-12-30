export interface LogisticModel {
  id            : string;
  scheduledOn   : string;
  modifiedOn    : Date;
  clinic        : ClinicModel;
  calledBy      : UserModel;
  status        : StatusModel;
  driver        : UserModel;
  organization  : string;
  landLine      : string;
  mobile        : string;
  email         : string;
  area          : string;
  city          : string;
  country       : string;
  pickUpTime    : string;
  deliverdTime  : string;
  deliveredTo   : string;
}

interface ClinicModel {
  id            : string;
  name          : string;
}

interface UserModel {
  id            : string;
  name          : string;
}

interface StatusModel {
  id            : string;
  name          : string;
}
