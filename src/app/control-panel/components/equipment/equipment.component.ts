import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddEquipmentComponent } from './_dialogues/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './_dialogues/edit-equipment/edit-equipment.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent {
  public isFetchingEquipment: boolean;
  matDialogConfig: MatDialogConfig = {
    disableClose: true,
    width: '1400px',
    panelClass: 'mat-dialogue-no-padding',
  };

  constructor(private readonly _matDialog: MatDialog) {}

  public onAddEquipmentButtonClicked(): void {
    this._matDialog
      .open(AddEquipmentComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }

  public onEditEquipmentClicked(): void {
    this._matDialog
      .open(EditEquipmentComponent, this.matDialogConfig)
      .afterClosed()
      .pipe(take(1));
  }
}
