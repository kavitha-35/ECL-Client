import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TestModel } from '../models/tests/test.model';
import { ROUTE_CONFIG } from '../../shared/models/constant';
import { AddTestRequestModel } from '../models/tests/add-test/add-test-request.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private readonly routePrefix = 'api/v1/Tests';

  constructor(private readonly httpClient: HttpClient) { }

  getTestsByDepartmentId(departmentId: string): Observable<TestModel[]> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}?departmentId=${departmentId}`;
    return this.httpClient.get<TestModel[]>(apiUrl);
  }

  addTest(addTestRequestModel: AddTestRequestModel): Observable<TestModel> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<TestModel>(apiUrl, addTestRequestModel);
  }

  updateTest(testId: string, editTestRequestModel: AddTestRequestModel): Observable<TestModel> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${testId}`;
    return this.httpClient.put<TestModel>(apiUrl, editTestRequestModel);
  }

  deleteTest(testId: string): Observable<boolean> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${testId}`;
    return this.httpClient.delete<boolean>(apiUrl);
  }
}
