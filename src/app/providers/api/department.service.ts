import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class DepartmentService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get departments
     */
    getDepartments() {
        return this.api.get("department/");
    }

    /**
     * Get department
     * @param departmentId 
     */
    getDepartment(departmentId) {
        return this.api.get("department/" + departmentId);
    }

    /**
     * Add new department
     * @param payload 
     */
    addDepartment(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update department
     * @param departmentId 
     * @param payload 
     */
    updateDepartment(departmentId: any, payload: any) {
        return this.api.put("department/" + departmentId, payload);
    }

    /**
     * Delete department
     * @param departmentId 
     */
    deleteDepartment(departmentId: any) {
        return this.api.delete("department/" + departmentId);
    }

}