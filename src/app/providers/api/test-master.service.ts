import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class TestMasterService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get test masters
     */
    getTestMasters() {
        return this.api.get("department/");
    }

    /**
     * Get test master
     * @param id 
     */
    getTestMaster(id) {
        return this.api.get("department/" + id);
    }

    /**
     * Add new test master
     * @param payload 
     */
    addTestMaster(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update test master
     * @param id 
     * @param payload 
     */
    updateTestMaster(id: any, payload: any) {
        return this.api.put("department/" + id, payload);
    }

    /**
     * Delete test master
     * @param id 
     */
    deleteTestMaster(id: any) {
        return this.api.delete("department/" + id);
    }

}