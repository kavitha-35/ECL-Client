export interface RegistrationModel {
  id                    : string;
  name                  : string;
  email                 : string;
  phoneNumber           : string;
  mobileNumber          : string;
  dateOfBirth           : string;
  area                  : string;
  postalCode            : string;
  city                  : string;
  gender                : GenderModel;
  status                : StatusModel;
  referralOrganization  : OrganizationModel;
  referralDoctor        : DoctorModel;
  tests                 : LinkTestModel[];
}

interface LinkTestModel {
  id                    : string;
  name                  : string;
  price                 : string;
  averageTat            : string;
  isOutSourced          : boolean;
  isExpanded            : boolean;
  sample                : SampleModel;
  container             : ContainerModel;
  tests                 : LinkTestModel[];
}

interface GenderModel {
  id                    : string;
  name                  : string;
}

interface StatusModel {
  id                    : string;
  name                  : string;
}

interface OrganizationModel {
  id                    : string;
  name                  : string;
}

interface DoctorModel {
  id                    : string;
  name                  : string;
}


interface SampleModel {
  id                    : string;
  name                  : string;
}

interface ContainerModel {
  id                    : string;
  name                  : string;
}


