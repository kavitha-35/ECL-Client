import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SampleTypeModel } from '../models/sample-type/sample-type.model';
import { ROUTE_CONFIG } from '../../shared/models/constant';

@Injectable({
  providedIn: 'root',
})
export class PaymentCollectionService {
  private readonly routePrefix = 'api/v1/SampleTypes';

  constructor(private readonly httpClient: HttpClient) {}

  getSampleTypes(): Observable<SampleTypeModel[]> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<SampleTypeModel[]>(apiUrl);
  }
}
