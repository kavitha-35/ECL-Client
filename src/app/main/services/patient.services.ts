import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ROUTE_CONFIG } from '../../shared/models/constant';
import { AddPatientRequestModel } from '../models/patient/registration/add-patient-request.model';
import { AddPatientResponseModel } from '../models/patient/registration/add-patient-response.model';
import { GetPatientResponseModel } from '../models/patient/get-patient/get-patient-response.model';
import { PatientModel } from '../models/patient/patient.model';

@Injectable()
export class PatientServices {
  private readonly routePrefix = 'registration';

  constructor(private httpClient: HttpClient) {}

  addPatient(addPatientRequest: AddPatientRequestModel): Observable<AddPatientResponseModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<AddPatientResponseModel>(apiUrl, addPatientRequest, { headers: headers });
  }

  getPatientById(patientId: string): Observable<GetPatientResponseModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}?patientId=${patientId}`;
    return this.httpClient.get<GetPatientResponseModel>(apiUrl, { headers: headers });
  }

  searchPatients(query: string): Observable<GetPatientResponseModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}?searchQuery=${query}`;
    return this.httpClient.put<GetPatientResponseModel[]>(apiUrl, { headers: headers });
  }

  savePatient(patient: PatientModel): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<any>(apiUrl, patient, { headers: headers });
  }
}
