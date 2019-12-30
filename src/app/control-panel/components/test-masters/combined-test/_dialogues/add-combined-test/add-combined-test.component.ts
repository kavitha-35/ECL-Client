import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-combined-test',
  templateUrl: './add-combined-test.component.html',
  styleUrls: ['./add-combined-test.component.scss']
})
export class AddCombinedTestComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<AddCombinedTestComponent>) { }

  ngOnInit(): void { }

  public onAddTestClicked(): void {
    this.dialogRef.close();
  }
}
