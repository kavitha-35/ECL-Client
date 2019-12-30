import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-individual-test',
  templateUrl: './add-individual-test.component.html',
  styleUrls: ['./add-individual-test.component.scss']
})
export class AddIndividualTestComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<AddIndividualTestComponent>) { }

  ngOnInit(): void { }

  public onAddTestClicked(): void {
    this.dialogRef.close();
  }
}
