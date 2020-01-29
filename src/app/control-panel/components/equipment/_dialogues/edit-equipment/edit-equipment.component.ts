import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';
import { NgForm } from '@angular/forms';
import { EquipmentService } from 'app/control-panel/services/equipment.service';
import { LookupService } from 'app/control-panel/services/lookup.service';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEquipmentComponent implements OnInit {
  brands: LookUpModel[];
  public equipments: LookUpModel[];
  public selectedForEdit: EquipmentModel;
  constructor(
    private readonly _dialogRef: MatDialogRef<EditEquipmentComponent>,
    private readonly _equipmentService: EquipmentService,
    private readonly _lookUpService: LookupService,
    private readonly cRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: EquipmentModel,
  ) {
    this.selectedForEdit = data;
    // console.log(this.selectedForEdit);
  }

  ngOnInit(): void {
    this.getEquipment();
    this.getBrand();
  }

  public onEditEquipmentClicked(equipment: NgForm): void {
    console.log(equipment.form.value);
    this._equipmentService.updateEquipment(this.selectedForEdit.equipmentId, equipment.form.value).subscribe(() => {
      this._dialogRef.close();
    });
  }

  public getEquipment(): void {
    this._lookUpService.getLookUp('Equipment').subscribe((data: LookUpModel[]) => {
      this.equipments = data;
      this.cRef.detectChanges();
    });
  }

  public getBrand(): void {
    this._lookUpService.getLookUp('brand').subscribe((data: LookUpModel[]) => {
      this.brands = data;
      this.cRef.detectChanges();
    });
  }
}
