import { Component, OnInit, ViewChild, Optional, Inject, AfterViewInit } from '@angular/core';
import { ProfileTestModel } from 'app/control-panel/models/test-master/profile-test/profile-test.model';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { LinkTestToProfiletestComponent } from '../link-test-to-profiletest/link-test-to-profiletest.component';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { ProfileTestService } from 'app/control-panel/services/profiletest.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddProfileTestComponent } from '../add-profile-test/add-profile-test.component';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';

@Component({
  selector: 'app-edit-profile-test',
  templateUrl: './edit-profile-test.component.html',
  styleUrls: ['./edit-profile-test.component.scss']
})
export class EditProfileTestComponent implements OnInit, AfterViewInit {
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
    private readonly _departmentService: DepartmentService,
    @Optional() @Inject(MAT_DIALOG_DATA) private readonly data: ProfileTestModel,
  ) {
    this.testprofile = this.data;
    console.log('selected test profile', this.testprofile);
   }

  ngOnInit(): void {
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

  public updateProfile(): void {
    this.testprofile.combinedTest = this.linkTestProfileComponent.testsInTable;
    console.log('profile update data', this.testprofile);
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

  public cancel(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    this.linkTestProfileComponent.refreshLinkedTests(this.testprofile.combinedTest);
  }
}
