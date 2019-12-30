import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ROUTE_CONFIG } from '../../shared/models/constant';
import { AddPatientRequestModel } from '../models/patient/registration/add-patient-request.model';
import { AddPatientResponseModel } from '../models/patient/registration/add-patient-response.model';
import { GetPatientResponseModel } from '../models/patient/get-patient/get-patient-response.model';

@Injectable()
export class PatientServices {
  private readonly routePrefix = 'api/v1/Patients';

  constructor(private httpClient: HttpClient) {}

  addPatient(addPatientRequest: AddPatientRequestModel): Observable<AddPatientResponseModel> {
    const apiUrl = `${ROUTE_CONFIG.PatientServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<AddPatientResponseModel>(apiUrl, addPatientRequest);
  }

  getPatientById(patientId: string): Observable<GetPatientResponseModel> {
    const apiUrl = `${ROUTE_CONFIG.PatientServiceBaseUrl}/${this.routePrefix}?patientId=${patientId}`;
    return this.httpClient.get<GetPatientResponseModel>(apiUrl);
  }

  searchPatients(query: string): Observable<GetPatientResponseModel[]> {
    const apiUrl = `${ROUTE_CONFIG.PatientServiceBaseUrl}/${this.routePrefix}?searchQuery=${query}`;
    return this.httpClient.put<GetPatientResponseModel[]>(apiUrl, null);
  }
}
