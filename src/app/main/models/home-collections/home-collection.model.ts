export interface HomeCollectionModel {
  id                    : string;
  patientName           : string;
  phoneNumber           : string;
  mobileNumber          : string;
  email                 : string;
  dateOfBirth           : string;
  city                  : string;
  area                  : string;
  postalCode            : string;
  country               : string;
  comment               : string;
  scheduleDate          : string;
  status                : StatusModel;
  gender                : GenderModel;
  referral              : ReferralModel;
}

interface ReferralModel {
  organization          : OrganizationModel;
  doctor                : DoctorModel;
}

interface OrganizationModel {
  id                    : string;
  name                  : string;
}

interface DoctorModel {
  id                    : string;
  name                  : string;
}

interface GenderModel {
  id                    : string;
  name                  : string;
}

interface StatusModel {
  id                    : string;
  name                  : string;
}
