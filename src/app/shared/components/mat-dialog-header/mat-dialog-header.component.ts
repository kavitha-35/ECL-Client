import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-header',
  templateUrl: './mat-dialog-header.component.html',
  styleUrls: ['./mat-dialog-header.component.scss']
})
export class MatDialogHeaderComponent {
  @Input() public title       : string;
  @Input() public subTitle    : string;

  constructor(private readonly _matDialog: MatDialog) {}

  public onCloseButtonClicked(): void {
    this._matDialog.closeAll();
  }
}
