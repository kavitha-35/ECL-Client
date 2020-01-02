import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class IndividualTestService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get individual test
     */
    getIndividualTest() {
        return this.api.get("IndividualTest");
    }

    /**
     * Add new individual test
     * @param payload 
     */
    addIndividualTest(payload: any) {
        return this.api.post("IndividualTest/add", payload);
    }

    /**
     * Update individual test
     * @param payload 
     */
    updateIndividualTest(payload: any) {
        return this.api.post("IndividualTest/update", payload);
    }

}