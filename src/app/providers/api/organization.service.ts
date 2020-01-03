import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class OrganizationService {

    /**
     * constructor
     * @param api 
     */
    constructor(private api: ApiService) { }

    /**
     * Get organizations
     */
    getOrganizations() {
        return this.api.get("department/");
    }

    /**
     * Get organization
     * @param organizationId 
     */
    getOrganization(organizationId) {
        return this.api.get("department/" + organizationId);
    }

    /**
     * Add new organization
     * @param payload 
     */
    addOrganization(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update organization
     * @param organizationId 
     * @param payload 
     */
    updateOrganization(organizationId: any, payload: any) {
        return this.api.put("department/" + organizationId, payload);
    }

    /**
     * Delete organization
     * @param organizationId 
     */
    deleteOrganization(organizationId: any) {
        return this.api.delete("department/" + organizationId);
    }

    /**
     * Get doctors
     */
    getDoctors() {
        return this.api.get("department/");
    }

    /**
     * Get doctor
     * @param doctorId 
     */
    getDoctor(doctorId) {
        return this.api.get("department/" + doctorId);
    }

    /**
     * Add new doctor
     * @param payload 
     */
    addDoctor(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update doctor
     * @param doctorId 
     * @param payload 
     */
    updateDoctor(doctorId: any, payload: any) {
        return this.api.put("department/" + doctorId, payload);
    }

    /**
     * Delete doctor
     * @param doctorId 
     */
    deleteDoctor(doctorId: any) {
        return this.api.delete("department/" + doctorId);
    }

    /**
     * Get organization price lists
     */
    getOrganizationPriceLists() {
        return this.api.get("department/");
    }

    /**
     * Get organization price list
     * @param organizatioPriceListnId 
     */
    getOrganizationPriceList(organizationPriceListId) {
        return this.api.get("department/" + organizationPriceListId);
    }

    /**
     * Add new organization price list
     * @param payload 
     */
    addOrganizationPriceList(payload: any) {
        return this.api.post("department", payload);
    }

    /**
     * Update organization price list
     * @param organizationPriceListId 
     * @param payload 
     */
    updateOrganizationPriceList(organizationPriceListId: any, payload: any) {
        return this.api.put("department/" + organizationPriceListId, payload);
    }

    /**
     * Delete organization price list
     * @param organizationPriceListId 
     */
    deleteOrganizationPriceList(organizationPriceListId: any) {
        return this.api.delete("department/" + organizationPriceListId);
    }

}