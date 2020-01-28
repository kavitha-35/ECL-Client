import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';

@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewDepartmentsComponent implements OnInit {
selectedForView: DepartmentModel;
  constructor(
    private readonly dialogRef: MatDialogRef<ViewDepartmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DepartmentModel,
  ) {
    this.selectedForView = data;
  }
  ngOnInit(): void {
  }
  public onCloseButtonClicked(): void {
    this.dialogRef.close();
  }
}
