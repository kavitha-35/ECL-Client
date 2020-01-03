import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ProfileTestService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get profile tests
     */
    getProfileTests() {
        return this.api.get("department/");
    }

    /**
     * Get profile test
     * @param profileTestId 
     */
    getProfileTest(profileTestId) {
        return this.api.get("department/" + profileTestId);
    }

    /**
     * Add new profile test
     * @param payload 
     */
    addProfileTest(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update profile test
     * @param profileTestId 
     * @param payload 
     */
    updateProfileTest(profileTestId: any, payload: any) {
        return this.api.put("department/" + profileTestId, payload);
    }

    /**
     * Delete profile test
     * @param profileTestId 
     */
    deleteProfileTest(profileTestId: any) {
        return this.api.delete("department/" + profileTestId);
    }

}