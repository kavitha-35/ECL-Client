import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestModel } from 'app/control-panel/models/tests/test.model';

@Component({
  selector: 'app-edit-individual-test',
  templateUrl: './edit-individual-test.component.html',
  styleUrls: ['./edit-individual-test.component.scss']
})
export class EditIndividualTestComponent implements OnInit {
  constructor(private readonly dialogRef: MatDialogRef<EditIndividualTestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TestModel) {
  }

  ngOnInit(): void { }

  public onEditTestClicked(): void {
    this.dialogRef.close();
  }
}
