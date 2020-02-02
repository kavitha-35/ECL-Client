import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { RegistrationListModel } from '../models/registration-list/registration-list.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationListService {
  private readonly routePrefix = 'registration';

  constructor(private httpClient: HttpClient) { }

  addRegistrationList(registration: RegistrationListModel): Observable<RegistrationListModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<RegistrationListModel>(apiUrl, registration, { headers: headers });
  }

  getAllRegistrationList(): Observable<RegistrationListModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<RegistrationListModel[]>(apiUrl, { headers: headers });
  }

  getRegistrationList(registrationListId: number): Observable<RegistrationListModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${registrationListId}`;
    return this.httpClient.get<RegistrationListModel>(apiUrl, { headers: headers });
  }

  updateRegistrationList(registrationListId: number, registrationList: RegistrationListModel): Observable<RegistrationListModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${registrationListId}`;
    return this.httpClient.put<RegistrationListModel>(apiUrl, registrationList, { headers: headers });
  }

  deleteRegistrationList(registrationListId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${registrationListId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
