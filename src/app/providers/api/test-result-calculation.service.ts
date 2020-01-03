import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class TestResultCalculationService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get test result calculations
     */
    getTestResultCalculations() {
        return this.api.get("department/");
    }

    /**
     * Get test result calculation
     * @param id 
     */
    getTestResultCalculation(id) {
        return this.api.get("department/" + id);
    }

    /**
     * Add new test result calculation
     * @param payload 
     */
    addTestResultCalculation(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update test result calculation
     * @param id 
     * @param payload 
     */
    updateTestResultCalculation(id: any, payload: any) {
        return this.api.put("department/" + id, payload);
    }

    /**
     * Delete test result calculation
     * @param id 
     */
    deleteTestResultCalculation(id: any) {
        return this.api.delete("department/" + id);
    }

}