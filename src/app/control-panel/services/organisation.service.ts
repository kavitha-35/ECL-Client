import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrganisationModel } from '../models/organisations/organisation.model';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  private readonly routePrefix = 'organization';

  constructor(private readonly httpClient: HttpClient) {}

  getAllOrganisations(): Observable<OrganisationModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<OrganisationModel[]>(apiUrl, { headers: headers });
  }

  addOrganisation(organisation: OrganisationModel): Observable<OrganisationModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<OrganisationModel>(apiUrl, organisation, { headers: headers });
  }

  updateOrganisation(organisationId: string, organisation: OrganisationModel): Observable<OrganisationModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${organisationId}`;
    return this.httpClient.put<OrganisationModel>(apiUrl, organisation, { headers: headers });
  }

  deleteOrganisation(organisationId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${organisationId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }

}
