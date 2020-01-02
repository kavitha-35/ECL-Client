import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

	public configuration = null;

    /**
	 * constructor
	 */
	constructor() {
		this.configuration = {
			info: {
				title: 'ECL Client',
				version: '0.0.1'
			},
			env: 'development',
			development: {
				baseUrl: 'http://quality.dyndns-web.com:8008/lis-server/'
			},
			production: {
				baseUrl: 'http://quality.dyndns-web.com:8008/lis-server/'
			}
		}
	}

}