export interface AddAppointmentRequestModel {
    from :                   string;
    to :                     string;
    comments :               string;
    docterId :               number;
    patientType :            number;
    referal :                string;
    confirmMode :            number;
    appointmentTests :       AppointmentTestModel[];
}

export interface AppointmentTestModel {
    appointmentId :          number;
    testId :                 number;
}
