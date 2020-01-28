import { Component, OnInit, Inject, Optional, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { CombinedTest } from '../../test.model';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { CombinedTestModel } from 'app/control-panel/models/test-master/combined-test/combined-test.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-combined-test',
  templateUrl: './edit-combined-test.component.html',
  styleUrls: ['./edit-combined-test.component.scss'],
})
export class EditCombinedTestComponent implements OnInit {
  public get lookUpService(): LookupService {
    return this._lookUpService;
  }
  public test: CombinedTestModel;
  specimen: LookUpModel[] = [];
  specimenType: LookUpModel[] = [];
  storage: LookUpModel[] = [];
  reportFormat: LookUpModel[] = [];
  departments: DepartmentModel[] = [];

  constructor(
    private readonly dialogRef: MatDialogRef<EditCombinedTestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CombinedTestModel,
    private readonly _combinedTestService: CombinedTestService,
    private readonly cRef: ChangeDetectorRef,
    private _lookUpService: LookupService,
    private readonly _departmentService: DepartmentService,
  ) {
    this.test = data;
    console.log(this.test);
  }

  ngOnInit(): void {
    this.getSpecimen();
    this.getSpecimenType();
    this.getStorage();
    this.getReportFormat();
    this.getDepartments();
  }

  public onEditTestClicked(combinedTest: NgForm): void {
    this._combinedTestService.updateTest(this.test.testId + '', this.test).subscribe((data) => {
      this.dialogRef.close();
      console.log(combinedTest.form.value);
    });
  }

  public getSpecimen(): void {
    this._lookUpService.getLookUp('Specimen').subscribe((data: LookUpModel[]) => {
      this.specimen = data;
      this.cRef.detectChanges();
      console.log(this.specimen);
    });
  }

  public getSpecimenType(): void {
    this._lookUpService.getLookUp('SpecimenType').subscribe((data: LookUpModel[]) => {
      this.specimenType = data;
      console.log(this.specimenType);
    });
  }

  public getStorage(): void {
    this._lookUpService.getLookUp('Storage').subscribe((data: LookUpModel[]) => {
      this.storage = data;
      console.log(this.storage);
    });
  }

  public getReportFormat(): void {
    this._lookUpService.getLookUp('ReportFormat').subscribe((data: LookUpModel[]) => {
      this.reportFormat = data;
      console.log(this.reportFormat);
    });
  }

  public getDepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
    });
  }
}
