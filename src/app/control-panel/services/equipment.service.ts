import { Injectable } from '@angular/core';
import { EquipmentModel } from '../models/equipments/equipments.model';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private readonly routePrefix = 'equipment';

  constructor(private readonly httpClient: HttpClient) {}

  getAllEquipment(): Observable<EquipmentModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<EquipmentModel[]>(apiUrl, { headers: headers });
  }

  addEquipment(equipment: EquipmentModel): Observable<EquipmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<EquipmentModel>(apiUrl, equipment, { headers: headers });
  }

  updateEquipment(equipmentId: string, equipment: EquipmentModel): Observable<EquipmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${equipmentId}`;
    return this.httpClient.put<EquipmentModel>(apiUrl, equipment, { headers: headers });
  }

  deleteEquipment(equipmentId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${equipmentId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}


