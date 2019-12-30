import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss'],
})
export class EditEquipmentComponent {
  constructor(private readonly _dialogRef: MatDialogRef<EditEquipmentComponent>) {}

  public onEditEquipmentClicked(): void {
    this._dialogRef.close();
  }
}
