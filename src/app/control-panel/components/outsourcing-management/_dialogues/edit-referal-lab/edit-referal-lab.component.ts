import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import {
  ContactPerson,
  OutsourcingManagementModel,
} from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-edit-referal-lab',
  templateUrl: './edit-referal-lab.component.html',
  styleUrls: ['./edit-referal-lab.component.scss'],
})
export class EditReferalLabComponent implements OnInit {
  public cities: LookUpModel[];
  public countries: LookUpModel[];
  public contactPersonList: ContactPerson[] = [];
  public couriers: LookUpModel[];
  public departments: DepartmentModel[];
  public outsource: OutsourcingManagementModel;
  public contactPerson: ContactPerson;
  constructor(
    private readonly _dialogRef: MatDialogRef<EditReferalLabComponent>,
    private readonly outsourcingService: OutsourceManagementService,
    private readonly _lookUpService: LookupService,
    private readonly _departmentService: DepartmentService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) data: OutsourcingManagementModel,
  ) {
    this.outsource = data;
  }

  ngOnInit(): void {
    this.contactPerson = {
      designation: '',
      courierId: '',
      mobile: '',
      contactPersonName: '',
      dateOfBirth: '',
      dateOfAnniversary: '',
      email: '',
      departmentId: 0,
      telephone: '',
      twitter: '',
      facebook: '',
      instagram: '',
      whatsapp: '',
    };
    this.getCities();
    this.getCountries();
    this.getdepartments();
    this.getCourier();
  }

  public onEditReferalLabClicked(): void {
    this.outsource.contactPersons = this.contactPersonList;
    this.outsourcingService.updateOutsourcing(this.outsource.outsourceId, this.outsource).subscribe(() => {
      this._snackBar.open('Referral Lab Edited Successfully', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['snackbar'],
      });
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

  public getCourier(): void {
    this._lookUpService.getLookUp('courier').subscribe((data: LookUpModel[]) => {
      this.couriers = data;
    });
  }

  public getdepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
    });
  }

  public addContact(): void {
    this.contactPersonList.push(this.contactPerson);
    this.contactPerson = {
      designation: '',
      courierId: '',
      mobile: '',
      contactPersonName: '',
      dateOfBirth: '',
      dateOfAnniversary: '',
      email: '',
      departmentId: 0,
      telephone: '',
      twitter: '',
      facebook: '',
      instagram: '',
      whatsapp: '',
    };
  }

  public cancelContact(contact: ContactPerson): void {
    const index: number = this.contactPersonList.indexOf(contact);
    if (index !== -1) {
      this.contactPersonList.splice(index, 1);
    }
  }
}
