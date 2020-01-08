import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { LookUpModel } from '../models/lookup/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  private readonly routePrefix = 'lookup';

  constructor(private readonly httpClient: HttpClient) {}

  getLookUp(value: string): Observable<LookUpModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${value}`;
    return this.httpClient.get<LookUpModel[]>(apiUrl, { headers: headers });
  }
}
