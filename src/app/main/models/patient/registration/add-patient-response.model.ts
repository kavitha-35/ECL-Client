export interface AddPatientResponseModel {
    id :                         number;
    name :                       string;
    dateOfBirth :                string;
    primaryEmail :               string;
    secondaryEmail :             string;
    primaryContactNumber :       string;
    secondaryContactNumber :     string;
    comments :                   string;
    genderId :                   number;
    appointments :               AppointmentModel[];
}

export interface AppointmentModel {
    id :         number;
    from :       string;
    to :         string;
    comments :   string;
    tests :      TestModel[];
}

export interface TestModel {
    testId :     number;
}
