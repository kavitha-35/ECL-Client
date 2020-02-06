import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import {
  ContactPerson,
  AddOutsourcingManagementModel,
} from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { error } from 'util';

@Component({
  selector: 'app-add-referal-lab',
  templateUrl: './add-referal-lab.component.html',
  styleUrls: ['./add-referal-lab.component.scss'],
})
export class AddReferalLabComponent implements OnInit {
  public cities: LookUpModel[];
  public countries: LookUpModel[];
  public contactPersonList: ContactPerson[] = [];
  public outsource: AddOutsourcingManagementModel = new AddOutsourcingManagementModel();
  public couriers: LookUpModel[];
  public departments: DepartmentModel[];
  public contactPerson: ContactPerson;
  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferalLabComponent>,
    private readonly outsourcingService: OutsourceManagementService,
    private readonly _lookUpService: LookupService,
    private _snackBar: MatSnackBar,
    private readonly _departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {
    this.getCities();
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
    this.outsource = {
      labCode: '',
      labName: '',
      relation: '',
      address: '',
      area: '',
      city: '',
      poNumber: '',
      telephone: '',
      mobileNumber: '',
      fax: '',
      web: '',
      region: '',
      country: '',
      interfacingType: '',
      courierId: '',
      contactPerson: '',
      contactPersons: this.contactPersonList,
      email: '',
      facebook: '',
      whatsapp: '',
      twitter: '',
      instagram: '',
      paymentMethod: '',
      creditPeriod: '',
      creditLimit: '',
      url: '',
      userName: '',
      password: '',
    };
    this.getCountries();
    this.addContact();
    this.getCourier();
    this.getdepartments();
  }
  public onAddReferalLabClicked(): void {
    console.log(this.outsource);
    if (this.outsource.labName !== '') {
      this.outsourcingService.addOutsourcing(this.outsource).subscribe((data) => {
        this._snackBar.open('Referral Lab Added Successfully', '', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbar']
        });
        this._dialogRef.close();
      },
      // tslint:disable-next-line: no-shadowed-variable
      (error: any) => {
        this._snackBar.open(error, '', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['snackbar']
        });
      });
    } else {
      this._snackBar.open('Please Enter Valid Refferal Name', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['snackbar']
      });
    }
  }

  public getCities(): void {
    this._lookUpService.getLookUp('city').subscribe((data: LookUpModel[]) => {
      this.cities = data;
    });
  }

  public getCourier(): void {
    this._lookUpService.getLookUp('courier').subscribe((data: LookUpModel[]) => {
      this.couriers = data;
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
    });
  }

  public getdepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
    });
  }

  public addContact(): void {
    this.contactPersonList.push(this.contactPerson);
  }

  public cancelContact(contact: ContactPerson): void {
    const index: number = this.contactPersonList.indexOf(contact);
    if (index !== -1) {
      this.contactPersonList.splice(index, 1);
    }
  }
}
