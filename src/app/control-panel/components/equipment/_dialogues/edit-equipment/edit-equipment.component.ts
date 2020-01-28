import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditEquipmentComponent implements OnInit {
  brands: LookUpModel[];
  selectedForEdit: EquipmentModel;
  constructor(
    private readonly _dialogRef: MatDialogRef<EditEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EquipmentModel,
  ) {
    this.selectedForEdit = data;
   console.log(this.selectedForEdit);
  }

  ngOnInit(): void {
  }

  public onEditEquipmentClicked(): void {
    this._dialogRef.close();
  }
}
