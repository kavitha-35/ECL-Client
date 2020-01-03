import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class MethodService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get methods
     */
    getMethods() {
        return this.api.get("department/");
    }

    /**
     * Get method
     * @param id 
     */
    getMethod(id) {
        return this.api.get("department/" + id);
    }

    /**
     * Add new method
     * @param payload 
     */
    addMethod(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update method
     * @param id 
     * @param payload 
     */
    updateMethod(id: any, payload: any) {
        return this.api.put("department/" + id, payload);
    }

    /**
     * Delete method
     * @param id 
     */
    deleteMethod(id: any) {
        return this.api.delete("department/" + id);
    }

}