import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Test } from './test.model';
import { CombinedTestService } from 'app/control-panel/services/combinedtest.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-add-combined-test',
  templateUrl: './add-combined-test.component.html',
  styleUrls: ['./add-combined-test.component.scss']
})
export class AddCombinedTestComponent implements OnInit {
  public get lookUpService(): LookupService {
    return this._lookUpService;
  }
  test: Test = new Test();
  specimen: any[] = [];
  specimenType: any[] = [];
  storage: any[] = [];
  reportFormat: any[] = [];
  constructor(private readonly dialogRef: MatDialogRef<AddCombinedTestComponent>,
    private readonly _combinedTestService: CombinedTestService,
    private readonly _lookUpService: LookupService) {
  }

  ngOnInit(): void {
    this.getSpecimen();
  }

  public onAddTestClicked(): void {
    this.dialogRef.close();
  }


  addTest() {
    this._combinedTestService.addTest(this.test).subscribe((data) => {
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
