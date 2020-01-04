import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { DepartmentModel } from '../models/department/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private readonly routePrefix = 'department';

  constructor(private readonly httpClient: HttpClient) {}

  getAllDepartments(): Observable<DepartmentModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.get<DepartmentModel[]>(apiUrl, { headers: headers });
  }

  addDepartment(department: DepartmentModel): Observable<DepartmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<DepartmentModel>(apiUrl, department, { headers: headers });
  }

  updateDepartment(departmentId: string, department: DepartmentModel): Observable<DepartmentModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${departmentId}`;
    return this.httpClient.put<DepartmentModel>(apiUrl, department, { headers: headers });
  }

  deleteDepartment(departmentId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${departmentId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
