import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MethodModel } from '../models/method/method.model';
import { ROUTE_CONFIG } from 'app/shared/models/constant';


@Injectable({
  providedIn: 'root'
})
export class MethodService {

  private readonly routePrefix = 'method';

  constructor(private readonly httpClient: HttpClient) {}

  getAllMethod(): Observable<MethodModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<MethodModel[]>(apiUrl, { headers: headers });
  }

  addMethod(method: MethodModel): Observable<MethodModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<MethodModel>(apiUrl, method, { headers: headers });
  }

  updateMethod(methodId: string, method: MethodModel): Observable<MethodModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${methodId}`;
    return this.httpClient.put<MethodModel>(apiUrl, method, { headers: headers });
  }

  deleteMethod(methodId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${methodId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}

