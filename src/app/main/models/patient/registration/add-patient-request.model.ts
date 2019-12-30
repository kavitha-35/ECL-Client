export interface AddPatientRequestModel {
    name :                   string;
    dateOfBirth :            string;
    primaryEmail :           string;
    secondaryEmail :         string;
    primaryContactNumber :   string;
    secondaryContactNumber : string;
    comments :               string;
    genderId :               number;
    modifiedBy :             number;
    appointments :           AppointmentModel[];
}

export interface AppointmentModel {
    from :                   string;
    to :                     string;
    comments :               string;
    tests :                  TestModel[];
}

export interface TestModel {
    testId :                 number;
}
