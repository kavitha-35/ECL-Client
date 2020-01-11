import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { NgForm } from '@angular/forms';
import { OrganisationService } from 'app/control-panel/services/organisation.service';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.scss'],
})
export class AddOrganisationComponent implements OnInit {
  public relations: LookUpModel[];
  public regions: LookUpModel[];
  public countries: LookUpModel[];
  public areas: LookUpModel[];
  public languages: LookUpModel[];
  public businessHours: LookUpModel[];
  public timeZones: LookUpModel[];
  public paymentTypes: LookUpModel[];
  public revenueTargets: LookUpModel[];
  public reportAndBillings: LookUpModel[];
  public branches: LookUpModel[];
  public currencies: LookUpModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<AddOrganisationComponent>,
    private readonly _lookUpService: LookupService,
    private readonly _organisationService: OrganisationService,
  ) {}

  ngOnInit(): void {
    this.getRelations();
    this.getRegions();
    this.getCountries();
    this.getAreas();
    this.getBusinessHour();
    this.getLanguages();
    this.getPaymentTypes();
    this.getTimeZone();
    this.getRevenueTargets();
    this.getReportAndBilling();
    this.getBranches();
    this.getcurrencies();
  }
  public onAddOrganisationClicked(organisation: NgForm): void {
    console.log(organisation.form.value);
    this._organisationService.addOrganisation(organisation.form.value).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getRelations(): void {
    this._lookUpService.getLookUp('organisationRelation').subscribe((data) => {
      this.relations = data;
    });
  }

  public getRegions(): void {
    this._lookUpService.getLookUp('region').subscribe((data: LookUpModel[]) => {
      this.regions = data;
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
    });
  }

  public getBusinessHour(): void {
    this._lookUpService.getLookUp('businessHours').subscribe((data: LookUpModel[]) => {
      this.businessHours = data;
    });
  }

  public getLanguages(): void {
    this._lookUpService.getLookUp('language').subscribe((data: LookUpModel[]) => {
      this.languages = data;
    });
  }

  public getPaymentTypes(): void {
    this._lookUpService.getLookUp('paymentType').subscribe((data: LookUpModel[]) => {
      this.paymentTypes = data;
    });
  }

  public getTimeZone(): void {
    this._lookUpService.getLookUp('timeZone').subscribe((data: LookUpModel[]) => {
      this.timeZones = data;
    });
  }

  public getRevenueTargets(): void {
    this._lookUpService.getLookUp('area').subscribe((data: LookUpModel[]) => {
      this.revenueTargets = data;
    });
  }

  public getReportAndBilling(): void {
    this._lookUpService.getLookUp('reportAndBilling').subscribe((data: LookUpModel[]) => {
      this.reportAndBillings = data;
    });
  }
  public getAreas(): void {
    this._lookUpService.getLookUp('area').subscribe((data: LookUpModel[]) => {
      this.areas = data;
    });
  }

  public getBranches(): void {
    this._lookUpService.getLookUp('Branch').subscribe((data: LookUpModel[]) => {
      this.branches = data;
    });
  }

  public getcurrencies(): void {
    this._lookUpService.getLookUp('currency').subscribe((data: LookUpModel[]) => {
      this.currencies = data;
    });
  }
}
