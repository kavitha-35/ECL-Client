import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DepartmentModel } from 'app/control-panel/models/department/department.model';
import { EquipmentService } from 'app/control-panel/services/equipment.service';
import { DepartmentService } from 'app/control-panel/services/department.service';
import { EquipmentModel } from 'app/control-panel/models/equipments/equipments.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent implements  OnInit {
  public equipment: EquipmentModel[];
  public brands: DepartmentModel[];

  constructor(
    private readonly _dialogRef: MatDialogRef<AddEquipmentComponent>,
    private readonly _equipmentService: EquipmentService,
    private readonly departmentService: DepartmentService,
    ) { }

    ngOnInit(): void {
      this.getDepartments();
      }

  public onAddEquipmentClicked(equipment: NgForm): void {
   console.log(equipment.form.value);
   this._equipmentService.addEquipment(equipment.form.value).subscribe((data) => {
    this._dialogRef.close();
  });
  }
  public getDepartments(): void {
    this.departmentService.getAllDepartments().subscribe((data) => {
      this.brands= data;
    });
  }

}
