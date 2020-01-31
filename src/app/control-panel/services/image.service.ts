import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from 'app/shared/models/constant';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly routePrefix = 'imageupload';

  constructor(private readonly httpClient: HttpClient) { }

  fileUpload(file: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream; charset=utf-8').set('Auth-Key', 'liskey');
    const apiUrl = `${ROUTE_CONFIG.ConfigurationServiceBaseUrl}/${this.routePrefix}`;
    return this.httpClient.post<any>(apiUrl, file, { headers: headers });
  }
}
