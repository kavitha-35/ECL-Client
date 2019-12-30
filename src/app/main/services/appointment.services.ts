import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ROUTE_CONFIG } from '../../shared/models/constant';
import { AddAppointmentRequestModel } from '../models/appointment/add-appointment/add-appointment-request.model';
import { AddAppointmentResponseModel } from '../models/appointment/add-appointment/add-appointment-response.model';

@Injectable()
export class AppointmentServices {
  private readonly routePrefix = 'api/v1/Appointments';

  constructor(private httpClient: HttpClient) {}

  addAppointment(patientId: number, addNewAppointmentRequest: AddAppointmentRequestModel): Observable<AddAppointmentResponseModel> {
    const apiUrl = `${ROUTE_CONFIG.PatientServiceBaseUrl}/${this.routePrefix}?patientId=${patientId}`;
    return this.httpClient.post<AddAppointmentResponseModel>(apiUrl, addNewAppointmentRequest);
  }
}
