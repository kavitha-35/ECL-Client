import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { Observable } from 'rxjs';
import { CombinedTest } from '../components/test-masters/combined-test/test.model';
import { CombinedTestModel } from '../models/test-master/combined-test/combined-test.model';
import { IndividualTestModel } from '../models/test-master/individual-test/individual-test.model';

@Injectable({
  providedIn: 'root',
})
export class CombinedTestService {
  private readonly routePrefix = 'combinetest';
  private readonly individualTestPrefix = 'individualtest';
  private readonly combinetestprefix = 'combinetestmapping';

  constructor(private readonly httpClient: HttpClient) {}

  getAllTests(): Observable<CombinedTestModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<CombinedTestModel[]>(apiUrl, { headers: headers });
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

  getCombineTest(selectedId: number): Observable<CombinedTestModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${selectedId}`;
    return this.httpClient.get<CombinedTestModel>(apiUrl, { headers: headers });
  }

  getAllIndividualTests(): Observable<IndividualTestModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.individualTestPrefix}`;
    return this.httpClient.get<IndividualTestModel[]>(apiUrl, { headers: headers });
  }

  addIndividualTestsToCombineTest(tests: any): Observable<any> {
    console.log(tests);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.combinetestprefix}`;
    return this.httpClient.post<any>(apiUrl, tests, { headers: headers });
  }
}
