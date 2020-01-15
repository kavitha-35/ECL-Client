import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { IndividualTestModel } from '../models/test-master/individual-test/individual-test.model';
import { AddIndividualTestModel } from '../models/test-master/individual-test/add-individual-test.model';

@Injectable({
  providedIn: 'root',
})
export class IndividualTestService {
  private readonly routePrefix = 'IndividualTest';

  constructor(private readonly httpClient: HttpClient) {}

  getAllIndividualTest(): Observable<IndividualTestModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<IndividualTestModel[]>(apiUrl, { headers: headers });
  }

  addIndividualTest(individualTest: AddIndividualTestModel): Observable<IndividualTestModel> {
    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<IndividualTestModel>(apiUrl, individualTest, { headers: headers });
  }

  updateIndividualTest(individualTestId: number, individualTest: IndividualTestModel): Observable<IndividualTestModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${individualTestId}`;
    return this.httpClient.put<IndividualTestModel>(apiUrl, individualTest, { headers: headers });
  }

  deleteIndividualTest(individualTestId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${individualTestId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
