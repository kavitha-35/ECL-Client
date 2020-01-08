import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { IndividualTestService } from 'app/control-panel/services/individual-test.service';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-add-individual-test',
  templateUrl: './add-individual-test.component.html',
  styleUrls: ['./add-individual-test.component.scss'],
})
export class AddIndividualTestComponent implements OnInit {
  public processingCenter: LookUpModel[];
  constructor(
    private readonly dialogRef: MatDialogRef<AddIndividualTestComponent>,
    private readonly _individualTestService: IndividualTestService,
    private readonly lookUpService: LookupService,
  ) {}

  ngOnInit(): void {
    this.getProcessingCenter();
  }

  public onAddIndividualTestButtonClicked(individualTest: NgForm): void {
    console.log(individualTest.form.value);
    this._individualTestService.addIndividualTest(individualTest.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }

  public getProcessingCenter(): void {
    this.lookUpService.getLookUp('processingCenter').subscribe((data: LookUpModel[]) => {
      this.processingCenter = data;
      console.log(this.processingCenter);
    });
  }
}
