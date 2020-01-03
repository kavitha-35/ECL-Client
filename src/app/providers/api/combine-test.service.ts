import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class CombineTestService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get combine tests
     */
    getCombineTests() {
        return this.api.get("department/");
    }

    /**
     * Get combine test
     * @param id 
     */
    getCombineTest(id) {
        return this.api.get("department/" + id);
    }

    /**
     * Add new combine test
     * @param payload 
     */
    addCombineTest(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update combine test
     * @param id 
     * @param payload 
     */
    updateCombineTest(id: any, payload: any) {
        return this.api.put("department/" + id, payload);
    }

    /**
     * Delete combine test
     * @param id 
     */
    deleteCombineTest(id: any) {
        return this.api.delete("department/" + id);
    }

}