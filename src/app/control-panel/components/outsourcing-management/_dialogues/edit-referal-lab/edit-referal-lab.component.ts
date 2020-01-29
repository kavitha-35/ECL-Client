import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import {
  ContactPerson,
  OutsourcingManagementModel,
} from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';

@Component({
  selector: 'app-edit-referal-lab',
  templateUrl: './edit-referal-lab.component.html',
  styleUrls: ['./edit-referal-lab.component.scss']
})
export class EditReferalLabComponent implements OnInit {

  public cities: LookUpModel[];
  public countries: LookUpModel[];
  public contactPersonList: ContactPerson[] = [];
  public outsource: OutsourcingManagementModel = new OutsourcingManagementModel();
  constructor(
    private readonly _dialogRef: MatDialogRef<EditReferalLabComponent>,
    private readonly outsourcingService: OutsourceManagementService,
    private readonly _lookUpService: LookupService,
    @Inject(MAT_DIALOG_DATA) private readonly data: any
  ) {}

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
    this.outsource = this.data;
  }

  public onEditReferalLabClicked(): void {
    // this.outsource.contactPersons = this.contactPersonList;
    this.outsourcingService.updateOutsourcing(this.outsource.outsourceId, this.outsource).subscribe(() => {
      this._dialogRef.close();
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
