import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { EquipmentService } from 'app/control-panel/services/equipment.service';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';
import { NgForm } from '@angular/forms';
import { LookupService } from 'app/control-panel/services/lookup.service';
import { LookUpModel } from 'app/control-panel/models/lookup/lookup.model';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent implements OnInit {
  public equipment: EquipmentModel[];
  public brands: LookUpModel[];

  constructor(
    private readonly _dialogRef: MatDialogRef<AddEquipmentComponent>,
    private readonly _equipmentService: EquipmentService,
  ) {}

  ngOnInit(): void {}

  public onAddEquipmentClicked(equipment: NgForm): void {
    console.log(equipment.form.value);
    this._equipmentService.addEquipment(equipment.form.value).subscribe((data) => {
      this._dialogRef.close();
    });
  }
}
