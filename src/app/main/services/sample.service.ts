import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SampleModel } from '../models/samples/sample.model';
import { ROUTE_CONFIG } from '../../shared/models/constant';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  private readonly routePrefix = 'api/v1/Samples';

  constructor(private readonly httpClient: HttpClient) {}

  getSampleList(): Observable<SampleModel[]> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<SampleModel[]>(apiUrl);
  }

  addSample(sampleId: string): Observable<SampleModel> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<SampleModel>(apiUrl, sampleId);
  }

  updateSample(sampleId: string, sample: SampleModel): Observable<SampleModel> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${sampleId}`;
    return this.httpClient.put<SampleModel>(apiUrl, sample);
  }

  deleteSample(sampleId: string): Observable<any> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${sampleId}`;
    return this.httpClient.delete<any>(apiUrl);
  }
}
