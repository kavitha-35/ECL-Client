import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { OutsourceManagementService } from 'app/control-panel/services/outsource-management.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import {
  ContactPerson,
  AddOutsourcingManagementModel,
} from 'app/control-panel/models/outsourcing-management/outsourcing-management.model';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

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
  courierFilter: LookUpModel[];
  citieFilter: LookUpModel[];
  countryFilter: LookUpModel[];
  public selectedDepartments: DepartmentModel[];
  constructor(
    private readonly _dialogRef: MatDialogRef<AddReferalLabComponent>,
    private readonly outsourcingService: OutsourceManagementService,
    private readonly _lookUpService: LookupService,
    private readonly _departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {
    this.getCities();
    this.getCountries();
    this.addContact();
    this.getCourier();
    this.getdepartments();
  }
  public onAddReferalLabClicked(): void {
    this.outsource.contactPersons = this.contactPersonList;
    console.log(this.outsource);
    this.outsourcingService.addOutsourcing(this.outsource).subscribe(() => {
      this._dialogRef.close();
    });
  }

  public getCities(): void {
    this._lookUpService.getLookUp('city').subscribe((data: LookUpModel[]) => {
      this.cities = data;
      this.citieFilter = this.cities;
      console.log(data);
    });
  }

  public getCourier(): void {
    this._lookUpService.getLookUp('courier').subscribe((data: LookUpModel[]) => {
      this.couriers = data;
       this.courierFilter = this.couriers;
      console.log(data);
    });
  }

  public getCountries(): void {
    this._lookUpService.getLookUp('country').subscribe((data: LookUpModel[]) => {
      this.countries = data;
       this.countryFilter = this.countries;
      console.log(data);
    });
  }

  public getdepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.selectedDepartments = data;
      this.departments = this.selectedDepartments;
      console.log(data);
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

  public onKeySearch(value: string): void {
    if (value) {
      this.selectSearch(value);
    } else {
      this.couriers = this.courierFilter;
    }
  }

  public selectSearch(value: string): void {
    this.couriers = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.courierFilter.length; i++) {
      const option = this.courierFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.couriers.push(option);
      }
    }
  }
  public onCitySearch(value: string): void {
    if (value) {
      this.citySearch(value);
    } else {
      this.cities = this.citieFilter;
    }
  }

  public citySearch(value: string): void {
    this.cities = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.citieFilter.length; i++) {
      const option = this.citieFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.cities.push(option);
      }
    }
  }

  public onCountrySearch(value: string): void {
    if (value) {
      this.countrySearch(value);
    } else {
      this.countries = this.countryFilter;
    }
  }

  public countrySearch(value: string): void {
    this.countries = [];
    const filter = value.toLowerCase();
    for (let i = 0; i < this.countryFilter.length; i++) {
      const option = this.countryFilter[i];
      if (option.keyValue.toLowerCase().indexOf(filter) >= 0) {
        this.countries.push(option);
      }
    }
  }

  public onDepartmentSearch(value: string): void {
      this.selectedDepartments = this._filterDepartment(value);
  }

  private _filterDepartment(value: string): DepartmentModel[] {
    const filterValue = value.toLowerCase();
    return this.departments.filter((option) => option.departmentName.toLowerCase().includes(filterValue));
  }
}
