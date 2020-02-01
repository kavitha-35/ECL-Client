import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { ProfileTestModel } from '../models/test-master/profile-test/profile-test.model'
@Injectable({
    providedIn: 'root',
})
export class ProfileTestService {
    private readonly routePrefix = 'profileTest';
    private readonly profiletestprefix = 'profiletestmapping';
    constructor(private readonly httpClient: HttpClient) { }

    getProfileDetails(): Observable<ProfileTestModel[]> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.get<ProfileTestModel[]>(apiUrl, { headers: headers })
    }

    addProfileDetails(profile: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.post<any>(apiUrl, profile, { headers: headers });
    }
    addCombineTestToProfileTest(tests: any): Observable<any> {
        console.log(tests);
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.profiletestprefix}`;
        return this.httpClient.post<any>(apiUrl, tests, { headers: headers });
      }
      getAllTests(): Observable<ProfileTestModel[]> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
        const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
        return this.httpClient.get<ProfileTestModel[]>(apiUrl, { headers: headers });
      }
}
