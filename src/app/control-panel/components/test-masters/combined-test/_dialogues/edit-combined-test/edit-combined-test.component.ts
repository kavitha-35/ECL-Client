import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Test } from '../add-combined-test/test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-edit-combined-test',
  templateUrl: './edit-combined-test.component.html',
  styleUrls: ['./edit-combined-test.component.scss']
})
export class EditCombinedTestComponent implements OnInit {
  public get lookUpService(): LookupService {
    return this._lookUpService;
  }
  public test: Test;
  specimen: any[] = [];
  specimenType: any[] = [];
  storage: any[] = [];
  reportFormat: any[] = [];

  constructor(private readonly dialogRef: MatDialogRef<EditCombinedTestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Test,
    private readonly _combinedTestService: CombinedTestService,
    private _lookUpService: LookupService, ) {
    this.test = data;
  }

  ngOnInit(): void {
    this.getSpecimen();
    this.getSpecimenType();
    this.getStorage();
    this.getReportFormat();
  }

  public onEditTestClicked(): void {
    this._combinedTestService.updateTest(this.test.testId + '', this.test).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  public getSpecimen(): void {
    this._lookUpService.getLookUp('Specimen').subscribe((data: LookUpModel[]) => {
      this.specimen = data;
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
}
