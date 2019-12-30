import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ContainerTypeModel } from '../models/container-type/container-type.model';
import { ROUTE_CONFIG } from '../../shared/models/constant';

@Injectable({
  providedIn: 'root',
})
export class ContainerTypeService {
  private readonly routePrefix = 'api/v1/ContainerTypes';

  constructor(private readonly httpClient: HttpClient) {}

  getContainerTypes(): Observable<ContainerTypeModel[]> {
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<ContainerTypeModel[]>(apiUrl);
  }
}
