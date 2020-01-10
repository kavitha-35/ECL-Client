import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrganisationPriceModel } from '../models/organisation-price/organisation-price.model';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationPriceListService {
  private readonly routePrefix = 'organisationpricelist';

  constructor(private readonly httpClient: HttpClient) { }

  getAllOrganisationPriceList(): Observable<OrganisationPriceModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<OrganisationPriceModel[]>(apiUrl, { headers: headers });
  }
  addOrganisationPriceList(organisationpricelist: OrganisationPriceModel): Observable<OrganisationPriceModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<OrganisationPriceModel>(apiUrl, organisationpricelist, { headers: headers });
  }
  UpdateOrganisationPriceList(clinicId: string, organisationpricelist: OrganisationPriceModel): Observable<OrganisationPriceModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${clinicId}`;
    return this.httpClient.put<OrganisationPriceModel>(apiUrl, organisationpricelist, { headers: headers });
  }

  deleteOrganisationPriceList(clinicId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${clinicId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
