import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { HumanResourceModel } from '../models/human-resource/human-resource.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HumanResourceService {
  private readonly routePrefix = 'human-resource';

  constructor(private readonly httpClient: HttpClient) {}

  getAllHumanResources(): Observable<HumanResourceModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<HumanResourceModel[]>(apiUrl, { headers: headers });
  }

  addHumanResource(humanResource: HumanResourceModel): Observable<HumanResourceModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<HumanResourceModel>(apiUrl, humanResource, { headers: headers });
  }

  updateHumanResource(humanResourceId: string, humanResource: HumanResourceModel): Observable<HumanResourceModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${humanResourceId}`;
    return this.httpClient.put<HumanResourceModel>(apiUrl, humanResource, { headers: headers });
  }

  deleteHumanResource(humanResourceId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${humanResourceId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
