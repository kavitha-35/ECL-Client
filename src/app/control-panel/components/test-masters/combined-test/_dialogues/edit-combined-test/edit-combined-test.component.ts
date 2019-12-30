import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestModel } from 'app/control-panel/models/tests/test.model';

@Component({
  selector: 'app-edit-combined-test',
  templateUrl: './edit-combined-test.component.html',
  styleUrls: ['./edit-combined-test.component.scss']
})
export class EditCombinedTestComponent implements OnInit {
  public selectedTestForEdit: TestModel;

  constructor(private readonly dialogRef: MatDialogRef<EditCombinedTestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TestModel) {

  }

  ngOnInit(): void { }

  public onEditTestClicked(): void {
    this.dialogRef.close();
  }
}
