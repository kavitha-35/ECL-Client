import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ReferenceRangeService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get reference ranges
     */
    getReferenceRanges() {
        return this.api.get("department/");
    }

    /**
     * Get reference range
     * @param id 
     */
    getReferenceRange(id) {
        return this.api.get("department/" + id);
    }

    /**
     * Add new reference range
     * @param payload 
     */
    addReferenceRange(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update reference range
     * @param id 
     * @param payload 
     */
    updateReferenceRange(id: any, payload: any) {
        return this.api.put("department/" + id, payload);
    }

    /**
     * Delete reference range
     * @param id 
     */
    deleteReferenceRange(id: any) {
        return this.api.delete("department/" + id);
    }

}