import { Injectable } from '@angular/core';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceRangeModel } from '../models/reference-range/reference-range. model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceRangeService {
  private readonly routePrefix = 'referanceRange';

  constructor(private readonly httpClient: HttpClient) { }

  getAllReferenceRange(): Observable<ReferenceRangeModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<ReferenceRangeModel[]>(apiUrl, { headers: headers });
  }

  addReferenceRange(referenceRange: ReferenceRangeModel): Observable<ReferenceRangeModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<ReferenceRangeModel>(apiUrl, referenceRange, { headers: headers });
  }

  updateReferenceRange(referenceRangeId: string, referenceRange: ReferenceRangeModel): Observable<ReferenceRangeModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${referenceRangeId}`;
    return this.httpClient.put<ReferenceRangeModel>(apiUrl, referenceRange, { headers: headers });
  }

  deleteReferenceRange(referenceRangeId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${referenceRangeId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
