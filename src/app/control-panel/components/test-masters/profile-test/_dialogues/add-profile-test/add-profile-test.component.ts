import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { GridColumnModel } from 'app/shared/models/grid-column.model';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { MatTable, MatDialogRef } from '@angular/material';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { LinkTestComponent } from 'app/main/components/registration/add-registration/link-test/link-test.component';
import { ProfileTestService } from 'app/control-panel/services/profiletest.service';
import { LinkTestToProfiletestComponent } from '../link-test-to-profiletest/link-test-to-profiletest.component';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { DepartmentService } from 'app/control-panel/services/department.service';

@Component({
  selector: 'app-add-profile-test',
  templateUrl: './add-profile-test.component.html',
  styleUrls: ['./add-profile-test.component.scss']
})
export class AddProfileTestComponent implements OnInit {
  public testprofile: ProfileTestModel;
  specimen: LookUpModel[] = [];
  specimenType: LookUpModel[] = [];
  storage: LookUpModel[] = [];
  reportFormat: LookUpModel[] = [];
  departments: DepartmentModel[] = [];
  @ViewChild(LinkTestToProfiletestComponent, { static: false }) linkTestProfileComponent: LinkTestToProfiletestComponent;
  constructor(
    private readonly _lookUpService: LookupService,
    private readonly _profileTestService: ProfileTestService,
    private readonly dialogRef: MatDialogRef<AddProfileTestComponent>,
    private readonly _departmentService: DepartmentService
  ) {

   }

  ngOnInit(): void {
    this.testprofile = new ProfileTestModel();
    this.getStorage();
    this.getDepartments();
    this.getSpecimen();
    this.getSpecimenType();
  }

  public getSpecimen(): void {
    this._lookUpService.getLookUp('specimen').subscribe((data: LookUpModel[]) => {
      this.specimen = data;
    });
  }

  public getSpecimenType(): void {
    this._lookUpService.getLookUp('SpecimenType').subscribe((data: LookUpModel[]) => {
      this.specimenType = data;
    });
  }

  public saveProfile(): void {
    this.testprofile.combinedTest = this.linkTestProfileComponent.testsInTable;
    console.log('profile save data', this.testprofile);
    return;
    this._profileTestService.addProfileDetails(this.testprofile).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getStorage(): void {
    this._lookUpService.getLookUp('Storage').subscribe((data: LookUpModel[]) => {
      this.storage = data;
    });
  }

  public getDepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
    });
  }

  public clear(): void {
    this.dialogRef.close();
  }
}
