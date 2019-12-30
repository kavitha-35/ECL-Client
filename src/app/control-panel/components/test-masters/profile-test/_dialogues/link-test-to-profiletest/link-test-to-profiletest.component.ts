import { Component, OnInit } from '@angular/core';
import { TestModel } from 'app/main/models/patient/registration/add-patient-request.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-link-test-to-profiletest',
  templateUrl: './link-test-to-profiletest.component.html',
  styleUrls: ['./link-test-to-profiletest.component.scss']
})
export class LinkTestToProfiletestComponent implements OnInit {

  public searchQuery: string;
  public searchResults: TestModel[];
  public displayedColumns: string[] = ['id', 'name', 'testCode', 'description', 'price'];

  constructor(private readonly dialogRef: MatDialogRef<LinkTestToProfiletestComponent>) { }
  ngOnInit(): void {
  }

  public onSearchButtonClicked(): void { }
}
