import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MethodModel } from 'app/control-panel/models/method/method.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-method',
  templateUrl: './view-method.component.html',
  styleUrls: ['./view-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewMethodComponent implements OnInit {
  selectedForView: MethodModel;

  constructor(
    private readonly dialogRef: MatDialogRef<ViewMethodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MethodModel,
  ) {
    this.selectedForView = data;
  }
  ngOnInit(): void {}
  public onCloseButtonClicked(): void {
    this.dialogRef.close();
  }
}
