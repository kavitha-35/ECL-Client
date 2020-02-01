import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { NgForm } from '@angular/forms';
import { OrganisationService } from 'app/control-panel/services/organisation.service';
import { ContactPerson } from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';
import { ImageService } from 'app/control-panel/services/image.service';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.scss'],
})
export class AddOrganisationComponent implements OnInit {
  public contract: string;
  public relations: LookUpModel[];
  public cities: LookUpModel[];
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
  public contactPersonList: ContactPerson[] = [];
  public organisationTypes: LookUpModel[];
  public departments: LookUpModel[];
  public logo: string;
  public priceList: string;
  public template: string;
  constructor(
    private readonly dialogRef: MatDialogRef<AddOrganisationComponent>,
    private readonly _lookUpService: LookupService,
    private readonly _organisationService: OrganisationService,
    private readonly _imageService: ImageService,
  ) {}

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
    this.getBranches();
    this.addContact();
    this.getOrganisationTypes();
    this.getDepartments();
    this.getLanguages();
    this.getTimeZone();
    this.getCurrencies();
  }
  public onAddOrganisationClicked(organisation: NgForm): void {
    organisation.form.value.contactPerson = this.contactPersonList;
    organisation.form.value.contract = this.contract;
    organisation.form.value.logo = this.logo;
    organisation.form.value.template = this.template;
    organisation.form.value.priceList = this.priceList;
    console.log(organisation.form.value);
    this._organisationService.addOrganisation(organisation.form.value).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getCities(): void {
    this._lookUpService.getLookUp('city').subscribe((data: LookUpModel[]) => {
      this.cities = data;
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
    });
  }

  onContractChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this._imageService.fileUpload(formData).subscribe((data) => {
        this.contract = data;
      });
    }
  }

  onLogoInput(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this._imageService.fileUpload(formData).subscribe((data) => {
        this.logo = data;
      });
    }
  }

  onTemplateInput(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this._imageService.fileUpload(formData).subscribe((data) => {
        this.template = data;
      });
    }
  }

  onPriceListInput(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this._imageService.fileUpload(formData).subscribe((data) => {
        this.priceList = data;
      });
    }
  }

  public getCurrencies(): void {
    this._lookUpService.getLookUp('currency').subscribe((data: LookUpModel[]) => {
      this.currencies = data;
    });
  }

  public getOrganisationTypes(): void {
    this._lookUpService.getLookUp('organisationType').subscribe((data: LookUpModel[]) => {
      this.organisationTypes = data;
    });
  }

  public getLanguages(): void {
    this._lookUpService.getLookUp('language').subscribe((data: LookUpModel[]) => {
      this.languages = data;
    });
  }

  public getTimeZone(): void {
    this._lookUpService.getLookUp('timeZone').subscribe((data: LookUpModel[]) => {
      this.timeZones = data;
    });
  }

  public getBranches(): void {
    this._lookUpService.getLookUp('Branch').subscribe((data: LookUpModel[]) => {
      this.branches = data;
    });
  }

  public getDepartments(): void {
    this._lookUpService.getLookUp('contactDepartment').subscribe((data: LookUpModel[]) => {
      this.departments = data;
    });
  }

  public addContact(): void {
    this.contactPersonList.push(new ContactPerson());
  }

  public cancelContact(contact: ContactPerson): void {
    const index: number = this.contactPersonList.indexOf(contact);
    if (index !== -1) {
      this.contactPersonList.splice(index, 1);
    }
  }
}
