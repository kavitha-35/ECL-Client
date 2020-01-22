import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { CombinedTest } from '../../test.model';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-add-combined-test',
  templateUrl: './add-combined-test.component.html',
  styleUrls: ['./add-combined-test.component.scss'],
})
export class AddCombinedTestComponent implements OnInit {
  public get lookUpService(): LookupService {
    return this._lookUpService;
  }
  test: CombinedTest = new CombinedTest();
  specimen: LookUpModel[] = [];
  specimenType: LookUpModel[] = [];
  storage: LookUpModel[] = [];
  reportFormat: LookUpModel[] = [];
  departments: DepartmentModel[] = [];
  constructor(
    private readonly dialogRef: MatDialogRef<AddCombinedTestComponent>,
    private readonly _combinedTestService: CombinedTestService,
    private readonly _lookUpService: LookupService,
    private readonly _departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {
    this.getSpecimen();
    this.getSpecimenType();
    this.getStorage();
    this.getDepartments();
  }

  public onAddTestClicked(): void {
    this.dialogRef.close();
  }

  addTest(): void {
    console.log(this.test);
    this._combinedTestService.addTest(this.test).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getSpecimen(): void {
    this._lookUpService.getLookUp('Specimen').subscribe((data: LookUpModel[]) => {
      this.specimen = data;
    });
  }

  public getSpecimenType(): void {
    this._lookUpService.getLookUp('SpecimenType').subscribe((data: LookUpModel[]) => {
      this.specimenType = data;
    });
  }

  public getStorage(): void {
    this._lookUpService.getLookUp('Storage').subscribe((data: LookUpModel[]) => {
      this.storage = data;
    });
  }

  public getReportFormat(): void {
    this._lookUpService.getLookUp('ReportFormat').subscribe((data: LookUpModel[]) => {
      this.reportFormat = data;
    });
  }

  public getDepartments(): void {
    this._departmentService.getAllDepartments().subscribe((data: DepartmentModel[]) => {
      this.departments = data;
    });
  }
}
