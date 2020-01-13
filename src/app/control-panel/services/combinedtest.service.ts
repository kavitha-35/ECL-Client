import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { Observable } from 'rxjs';
import { CombinedTest } from '../components/test-masters/combined-test/test.model';

@Injectable({
  providedIn: 'root',
})
export class CombinedTestService {
  private readonly routePrefix = 'combinetest';

  constructor(private readonly httpClient: HttpClient) {}

  getAllTests(): Observable<CombinedTest[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<CombinedTest[]>(apiUrl, { headers: headers });
  }

  addTest(test: CombinedTest): Observable<CombinedTest> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<CombinedTest>(apiUrl, test, { headers: headers });
  }

  updateTest(testId: string, test: CombinedTest): Observable<CombinedTest> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${testId}`;
    return this.httpClient.put<CombinedTest>(apiUrl, test, { headers: headers });
  }

  deleteDepartment(departmentId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${departmentId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
