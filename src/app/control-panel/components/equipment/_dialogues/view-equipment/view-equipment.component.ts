import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-equipment',
  templateUrl: './view-equipment.component.html',
  styleUrls: ['./view-equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewEquipmentComponent implements OnInit {
selectedForView: EquipmentModel;
  constructor(
    private readonly dialogRef: MatDialogRef<ViewEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EquipmentModel,
  ) {
    this.selectedForView = data;
  }

  ngOnInit(): void {
  }

  public onCloseButtonClicked(): void {
    this.dialogRef.close();
  }

}

