import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ConfigService } from './config.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';

@Injectable()
export class ApiService {

    public baseUrl: any;

    /**
     * constructor
     * @param http 
     * @param config 
     */
    constructor(public http: Http, private config: ConfigService) {
        this.baseUrl = this.config.configuration[this.config.configuration.env].baseUrl;
    }

    /**
     * setHeader
     */
    setHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        headers.append("Access-Control-Allow-Headers", "*");
        headers.append('Auth-Key', 'liskey');
        return headers;
    }

    /**
     * Get method
     * @param url 
     */
    get(url: string) {
        let headers = this.setHeader();
        let options = new RequestOptions({ headers: headers });
        return this.http.get(`${this.baseUrl}${url}`, options)
            .map((res: Response) => res.json());
    }

    /**
     * Post method
     * @param url 
     * @param data 
     */
    post(url: string, data?: Object) {
        let headers = this.setHeader();
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.post(`${this.baseUrl}${url}`, body, options)
            .map((res: Response) => res.json());
    }

    /**
     * Put method
     * @param url 
     * @param data 
     */
    put(url: string, data?: Object) {
        let headers = this.setHeader();
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.put(`${this.baseUrl}${url}`, body, options)
            .map((res: Response) => res.json());
    }

    /**
     * Patch method
     * @param url 
     * @param data 
     */
    patch(url: string, data?: Object) {
        let headers = this.setHeader();
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.patch(`${this.baseUrl}${url}`, body, options)
            .map((res: Response) => res.json());
    }

    /**
     * File upload by post methof
     * @param url 
     * @param formData 
     */
    postFileupload(url: string, formData) {
        return new Promise((resolve, reject) => {
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', `${this.baseUrl}${url}`, true);
            xhr.setRequestHeader('Auth-Key', 'liskey');
            xhr.send(formData);
        });
    }

    /**
     * Delete method
     * @param url 
     */
    delete(url: string) {
        let headers = this.setHeader();
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(`${this.baseUrl}${url}`, options)
            .map((res: Response) => res.json());
    }

}
