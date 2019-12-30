import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddReferenceRangeComponent } from './_dialogues/add-reference-range/add-reference-range.component';
import { take } from 'rxjs/operators';
import { EditReferenceRangeComponent } from './_dialogues/edit-reference-range/edit-reference-range.component';

@Component({
  selector: 'app-refernce-range',
  templateUrl: './refernce-range.component.html',
  styleUrls: ['./refernce-range.component.scss'],
})
export class RefernceRangeComponent {
  public isFetchingReferenceRange: boolean;
  matDialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '1400px',
    panelClass: 'mat-dialogue-no-padding',
  };

  constructor(private readonly _matDialog: MatDialog) {}

  public onAddReferenceRangeButtonClicked(): void {
    this._matDialog
      .open(AddReferenceRangeComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public onEditReferenceRangeClicked(): void {
    this._matDialog
      .open(EditReferenceRangeComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }
}
