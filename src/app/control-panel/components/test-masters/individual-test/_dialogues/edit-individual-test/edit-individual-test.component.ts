import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IndividualTestModel } from 'app/control-panel/models/test-master/individual-test/individual-test.model';
import { NgForm } from '@angular/forms';
import { IndividualTestService } from 'app/control-panel/services/individual-test.service';

@Component({
  selector: 'app-edit-individual-test',
  templateUrl: './edit-individual-test.component.html',
  styleUrls: ['./edit-individual-test.component.scss'],
})
export class EditIndividualTestComponent implements OnInit {
  public selectedForEdit: IndividualTestModel;
  constructor(
    private readonly dialogRef: MatDialogRef<EditIndividualTestComponent>,
    private readonly individualTestService: IndividualTestService,
    @Inject(MAT_DIALOG_DATA) public data: IndividualTestModel,
  ) {
    this.selectedForEdit = data;
  }

  ngOnInit(): void {}

  public onEditIndividualTestClicked(test: NgForm): void {
    this.individualTestService.updateIndividualTest(this.selectedForEdit.individualTestId, test.form.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
