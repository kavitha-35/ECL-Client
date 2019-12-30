export interface AddAppointmentResponseModel {
    id :             number;
    from :           string;
    to :             string;
    comments :       string;
    patientId :      number;
    docterId :       number;
    patientType :    number;
    referal :        string;
    confirmMode :    number;
}
