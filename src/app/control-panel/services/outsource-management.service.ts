import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OutsourcingManagementModel } from '../models/outsourcing-management/outsourcing-management.model';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';

@Injectable({
  providedIn: 'root'
})
export class OutsourceManagementService {

  private readonly routePrefix = 'outsource';

  constructor(private readonly httpClient: HttpClient) {}

  getAllOutsourcing(): Observable<OutsourcingManagementModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<OutsourcingManagementModel[]>(apiUrl, { headers: headers });
  }

  addOutsourcing(outsource: OutsourcingManagementModel): Observable<OutsourcingManagementModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<OutsourcingManagementModel>(apiUrl, outsource, { headers: headers });
  }
  updateOutsourcing(OutsourcingId: string, Outsourcing: OutsourcingManagementModel): Observable<OutsourcingManagementModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${OutsourcingId}`;
    return this.httpClient.put<OutsourcingManagementModel>(apiUrl, Outsourcing, { headers: headers });
  }

  deleteOutsourcing(OutsourcingId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${OutsourcingId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
