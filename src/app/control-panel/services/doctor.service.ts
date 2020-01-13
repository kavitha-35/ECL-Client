import { Injectable } from '@angular/core';
import { DoctorModel } from '../models/Doctor/doctor.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private readonly routePrefix = 'doctor';

  constructor(private readonly httpClient: HttpClient) {}

  getAllDoctor(): Observable<DoctorModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<DoctorModel[]>(apiUrl, { headers: headers });
  }

  addDoctor(doctor: DoctorModel): Observable<DoctorModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<DoctorModel>(apiUrl, doctor, { headers: headers });
  }

  updateDoctor(doctorId: string, doctor: DoctorModel): Observable<DoctorModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${doctorId}`;
    return this.httpClient.put<DoctorModel>(apiUrl, doctor, { headers: headers });
  }

  deleteDoctor(doctorId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${doctorId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
