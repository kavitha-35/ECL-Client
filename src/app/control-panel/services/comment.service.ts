import { Injectable } from '@angular/core';
import { LookUpModel } from '../models/lookup/lookup.model';
import { ROUTE_CONFIG } from 'app/shared/models/constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly routePrefix = 'lookup';
  private readonly routeSuffix = 'comment';

  constructor(private readonly httpClient: HttpClient) {}
  getAllComments(): Observable<LookUpModel[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${this.routeSuffix}`;
    return this.httpClient.get<LookUpModel[]>(apiUrl, { headers: headers });
  }

  addComment(comment: LookUpModel): Observable<LookUpModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${this.routeSuffix}`;
    return this.httpClient.post<LookUpModel>(apiUrl, comment, { headers: headers });
  }

  updateComment(commentId: string, comment: LookUpModel): Observable<LookUpModel> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${commentId}`;
    return this.httpClient.put<LookUpModel>(apiUrl, comment, { headers: headers });
  }

  deleteComment(commentId: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}/${commentId}`;
    return this.httpClient.delete<boolean>(apiUrl, { headers: headers });
  }
}
