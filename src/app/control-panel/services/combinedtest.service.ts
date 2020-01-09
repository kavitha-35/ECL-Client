import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { Observable } from 'rxjs';
import { Test } from '../components/test-masters/combined-test/_dialogues/add-combined-test/test.model';

@Injectable({
    providedIn: 'root',
})
export class CombinedTestService {
    private readonly routePrefix = 'combinetest';

    constructor(private readonly httpClient: HttpClient) { }

    getAllTests(): Observable<Test[]> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.get<Test[]>(apiUrl, { headers: headers });
    }

    addTest(test: Test): Observable<Test> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.post<Test>(apiUrl, test, { headers: headers });
    }

    updateTest(testId: string, test: Test): Observable<Test> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${testId}`;
        return this.httpClient.put<Test>(apiUrl, test, { headers: headers });
    }

    deleteDepartment(departmentId: string): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${departmentId}`;
        return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
    }
}
