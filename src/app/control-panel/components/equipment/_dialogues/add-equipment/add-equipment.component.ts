import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent {
  constructor(private readonly _dialogRef: MatDialogRef<AddEquipmentComponent>) {}

  public onAddEquipmentClicked(): void {
    this._dialogRef.close();
  }
}
