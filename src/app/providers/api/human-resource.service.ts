import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class HumanResourceService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get human resource
     */
    getHumanResources() {
        return this.api.get("department/");
    }

    /**
     * Get human resource
     * @param id 
     */
    getHumanResource(id) {
        return this.api.get("department/" + id);
    }

    /**
     * Add new human resource
     * @param payload 
     */
    addHumanResource(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update human resource
     * @param id 
     * @param payload 
     */
    updateHumanResource(id: any, payload: any) {
        return this.api.put("department/" + id, payload);
    }

    /**
     * Delete human resource
     * @param id 
     */
    deleteHumanResource(id: any) {
        return this.api.delete("department/" + id);
    }

}