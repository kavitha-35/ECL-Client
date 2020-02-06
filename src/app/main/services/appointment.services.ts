import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ROUTE_CONFIG } from '../../shared/models/constant';
import { AddAppointmentRequestModel } from '../models/appointment/add-appointment/add-appointment-request.model';
import { AddAppointmentResponseModel } from '../models/appointment/add-appointment/add-appointment-response.model';
import { AppointmentModel } from '../models/appointment/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentServices {
  private readonly routePrefix = 'appointment';

  constructor(private httpClient: HttpClient) {}

  addAppointment(appointment: AddAppointmentRequestModel): Observable<AppointmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<AppointmentModel>(apiUrl, appointment, { headers: headers });
  }

  getAllAppointments(): Observable<AppointmentModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<AppointmentModel[]>(apiUrl, { headers: headers });
  }

  getAppointment(appointmentId: number): Observable<AppointmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${appointmentId}`;
    return this.httpClient.get<AppointmentModel>(apiUrl, { headers: headers });
  }

  updateAppointment(appointmentId: number, appointment: AppointmentModel): Observable<AppointmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${appointmentId}`;
    return this.httpClient.put<AppointmentModel>(apiUrl, appointment, { headers: headers });
  }

  deleteAppointment(AppointmentId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${AppointmentId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }

  updateAppointmentStatus(appointmentId: string, appointmentStatus: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${appointmentId}/status`;
    return this.httpClient.put<boolean>(apiUrl, { status: appointmentStatus }, { headers: headers });
  }
}
