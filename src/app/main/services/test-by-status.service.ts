import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationListModel } from '../models/registration-list/registration-list.model';
import { ROUTE_CONFIG } from 'app/shared/models/constant';

@Injectable({
  providedIn: 'root',
})
export class TestByStatusService {
  private readonly routePrefix = 'testByStatus';

  constructor(private httpClient: HttpClient) {}

  getAllStatusList(status: string): Observable<RegistrationListModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${status}`;
    return this.httpClient.get<RegistrationListModel[]>(apiUrl, { headers: headers });
  }

  changeStatusList(testId: string, status: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${testId}`;
    return this.httpClient.put<boolean>(apiUrl, status, { headers: headers });
  }
}
