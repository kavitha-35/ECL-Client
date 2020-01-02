import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class OutsourceService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get outsource
     */
    getOutsource() {
        return this.api.get("outsource");
    }

    /**
     * Add new outsource
     * @param payload 
     */
    addOutsource(payload: any) {
        return this.api.post("outsource/add", payload);
    }

    /**
     * Update outsource
     * @param payload 
     */
    updateOutsource(payload: any) {
        return this.api.post("outsource/update", payload);
    }

}